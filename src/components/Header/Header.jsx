import './Header.scss';
import logo from '../../assets/logos/soheilDehbastiLogo.svg';
import contactLogo from '../../assets/logos/contactLogo.svg';
import violinLogo from '../../assets/logos/violinLogo.svg';
import priceLogo from '../../assets/logos/dollarLogo.svg';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="soheil-dehbasti" />
        <section className='header__buttons'>
            <Button 
                buttonLogo = {contactLogo}
                buttonText = "contact"
                buttonClass = "header__btn"
            />
            <Button 
                buttonLogo = {violinLogo}
                buttonText = "lessons"
                buttonClass = "header__btn"
            />
            <Button 
                buttonLogo = {priceLogo}
                buttonText = "prices"
                buttonClass = "header__btn"
            />
        </section>
    </header>
  )
}

export default Header