import './Header.scss';
import logo from '../../assets/logos/soheilDehbastiLogo.svg';
import contactLogo from '../../assets/logos/contactLogo.svg';
import violinLogo from '../../assets/logos/violinLogo.svg';
import priceLogo from '../../assets/logos/dollarLogo.svg';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import arrow from '../../assets/logos/arrow.svg';

const Header = () => {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const [isDesktop, setIsDesktop] = useState(true);

    const handleResize = () => {
        const newViewportWidth = window.innerWidth;
        setViewportWidth(newViewportWidth);
        if (newViewportWidth < 1330) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
    }

    const [arrowClass, setArrowClass] = useState("down");
    const [isExpanded, setIsExpanded] = useState(false);

    const expandMenu = () => {
        if (isExpanded) {
            setIsExpanded(false);
            setArrowClass("down")
        } else {
            setIsExpanded(true);
            setArrowClass("up");
        }
        
    }

    useEffect(() => {

        handleResize();


        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth]);

    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="soheil-dehbasti" />
            {isDesktop ? <section className='header__buttons'>
                <Button
                    buttonLogo={contactLogo}
                    buttonText="contact"
                    buttonClass="header__btn"
                    buttonLink="contact"
                />
                <Button
                    buttonLogo={violinLogo}
                    buttonText="lessons"
                    buttonClass="header__btn"
                    buttonLink="mid-section"
                />
                <Button
                    buttonLogo={priceLogo}
                    buttonText="prices"
                    buttonClass="header__btn"
                    buttonLink="prices"
                />
            </section> : null}
            {isDesktop ? null :
                <div className='header__mobile-menu'>
                    {isExpanded ?
                        <div className='header__mobile-buttons'>
                            <Button
                                buttonLogo={contactLogo}
                                buttonText="contact"
                                buttonClass="header__btn header__btn--mobile"
                                buttonLink="contact"
                            />
                            <Button
                                buttonLogo={violinLogo}
                                buttonText="lessons"
                                buttonClass="header__btn header__btn--mobile"
                                buttonLink="mid-section"
                            />
                            <Button
                                buttonLogo={priceLogo}
                                buttonText="prices"
                                buttonClass="header__btn header__btn--mobile"
                                buttonLink="prices"
                            />
                        </div> : null
                    }
                    <img onClick={expandMenu} className={`header__arrow header__arrow--${arrowClass}`} src={arrow} alt="arrow" />
                </div>
            }

        </header>
    )
}

export default Header