import './s.css'
import { useState } from "react";

import plshelp from "../../assets/plshelpihavearaygun.jpg";
import toothless from "../../assets/toothless-dancing.gif";
import pato1 from "../../assets/pato1.jpg"
import pato2 from "../../assets/pato2.jpg"
import pato3 from "../../assets/pato3.jpg"
import pato4 from "../../assets/pato4.jpg"

export const Carrusel = () => {
  const images = [plshelp, toothless, pato1, pato2, pato3, pato4];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className='carrousel'>
        
        <button onClick={prev} id='prev'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
        </button>
          
        <section className='display'>
            <div className='carrousel-item'>
              <img
              src={images[index -1]}
              alt={`Slide ${index}`}
              />
            </div>
            <div className='carrousel-item'>
              <img
              src={images[index]}
              alt={`Slide ${index + 1}`}
              />
            </div>
            <div className='carrousel-item'>
            <img
            src={images[index + 1]}
            alt={`Slide ${index + 2}`}
            />
            
          </div>
        </section>
        
        <button onClick={next} id='next'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
        </button>
        
      </div>
    </>
  );
};
