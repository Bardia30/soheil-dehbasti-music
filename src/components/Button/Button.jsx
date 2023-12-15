import './Button.scss';

const Button = ({ buttonLogo, buttonText, buttonClass }) => {
  return (
    <button className={`btn ${buttonClass}`}>
      <img className='btn__logo' src={buttonLogo} alt={buttonText} />
      {buttonText}
    </button>
  )
}

export default Button