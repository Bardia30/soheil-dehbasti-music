import React from 'react'

const Input = ({ type, placeholder, isTextArea, name }) => {
    return (
        <>
            { isTextArea ?  
                <textarea name={name} className = 'contact__input contact__input--textarea' placeholder = { placeholder }></textarea> : 
                <input name={name} className="contact__input" type={type} placeholder={placeholder}></input>
            }           
        </>
        
    
    
  )
}

export default Input