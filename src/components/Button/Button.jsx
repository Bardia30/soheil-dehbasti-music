import './Button.scss';
import { Link as ScrollLink } from 'react-scroll';

const Button = ({ buttonLogo, buttonText, buttonClass, buttonLink }) => {
  return (
    <ScrollLink  to={`${buttonLink}`} smooth={true} duration={500}>
    <button className={`btn ${buttonClass}`}>
      <img className='btn__logo' src={buttonLogo} alt={buttonText} />
      {buttonText}
    </button></ScrollLink>
  )
}

export default Button