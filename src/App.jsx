import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MidSection from './components/MidSection/MidSection';
import Prices from './components/Prices/Prices';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MidSection  />
        <Prices />
        <Contact />
      </main>
      <footer className='footer'>
        <p>2023 © Designed and Developed by <a className='footer__link' href="https://bardiadevs.vercel.app"> BardiaDevs Inc.</a></p>
      </footer>
    </>
  );
}

export default App;
