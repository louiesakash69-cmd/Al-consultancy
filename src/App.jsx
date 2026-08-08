import { useState } from 'react'
import Header from './components/Header'
import Popup from './components/Popup'
import Hero from './components/Hero'
import About from './components/About'
import OurService from './components/OurService'
import IndustriesWeServe from './components/IndustriesWeServe'
import Whychoose from './components/Whychoose'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'





const App = () => {
  const [popup, setPopup] = useState(false);
  const [select, setSelect] = useState("");
  return (
    <div className='al-root'>
      <Header setPopup={setPopup} />
      <Hero setPopup={setPopup} />
      <About />
      <OurService />
      <IndustriesWeServe />
      <Whychoose />
      <Contact setPopup={setPopup} />
      <Popup
        popup={popup}
        setPopup={setPopup}
        select={select}
        setSelect={setSelect}
      />
      <Footer />
    </div>
  );
};

export default App;
