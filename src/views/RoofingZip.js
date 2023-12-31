import Footer from '../components/Footer';
import Nav from '../components/Nav';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Styles.css';
import '../assets/styles/Roofing.css';
import { IoTriangle } from "react-icons/io5";

const RoofingZip = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); 

  const nextStep = () => {
    if (step === 2) {
      navigate('/Thank-you');
    } else {
      setStep(step + 1);
    }
  };

  const renderFormSection = () => {
    switch (step) {
      case 1:
        return (
          <div className='service'>
            <p className='servicesTitle'>What's the Zip Code for your project?</p>
            <form className='form'>
              <input className='inputService' type="text" name="name" placeholder='Select/Enter your zip code'/>
            </form>
            <div className='divButton'>
              <div className='leftButton'></div>
              <button className='rightButton' onClick={nextStep}>
                <p className='buttonText'>SUBMIT</p>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='service2'>
            <p className='servicesTitle2'>Do you need to replace or repair an existing roof?</p>
            <form className='form2'>
              <input type="checkbox" className='checkbox' value="" />
              <label for="">Repair</label>
              <br></br>
              <input type="checkbox" className='checkbox' value="" />
              <label for="">Replace</label>
              <br></br>
              <input type="checkbox" className='checkbox' value="" />
              <label for="">I´m not sure</label>
            </form>
            <button className='divButton divButton2' onClick={nextStep}>
              <div className='leftButton'></div>
              <div className='rightButton rightButton2'>
                <p className='buttonText'>Next <IoTriangle className='triangle' /></p>
              </div>
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Nav />
      <section className='serviceForm'>
        {renderFormSection()}
      </section>
      <Footer />
    </>  
  );
};

export default RoofingZip;
