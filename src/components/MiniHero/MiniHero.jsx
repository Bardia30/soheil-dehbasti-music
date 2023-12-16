import { useEffect, useState } from 'react';
import './MiniHero.scss';

const MiniHero = ({ heroPic, heroTitle, heroParagraph, isRevert }) => {
  
  const [revertClass, setRevertClass] = useState("")

  useEffect(() => {
    if (isRevert) {
      setRevertClass("reverted")
    }
  },[isRevert])
  
  
  return (
    <div className={`mini-hero mini-hero--${revertClass}`}>
      <section className='mini-hero__texts'>
        <h3 className='mini-hero__title'>{heroTitle}</h3>
        <p className='mini-hero__paragraph'>{heroParagraph}</p>
      </section>
      <img className='mini-hero__pic' src={heroPic} alt="mini-hero-pic" />
    </div>
  )
}

export default MiniHero