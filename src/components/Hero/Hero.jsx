import Button from "../Button/Button";
import './Hero.scss';
import contactLogo from '../../assets/logos/contactLogo.svg';
import heroPic from '../../assets/images/hero.png';

const Hero = () => {
  return (
    <div className='hero'>
        <section className="hero__left">
            <h1 className="hero__title">Private music Lessons by an Experienced Music Teacher</h1>
            <p className="hero__paragraph">Join our expert-led private music classes, available both in-person and online. Specializing in European methodologies and the RCM curriculum, we offer personalized lessons in violin, guitar, and piano across classical and pop genres. Experience a unique blend of tradition and modernity, tailored to elevate your musical journey.</p>
            <Button
                buttonLogo={contactLogo}
                buttonClass="hero__button"
                buttonText="contact"
            />
        </section>
        <img className="hero__pic" src={heroPic} alt="hero" />
    </div>
  )
}

export default Hero