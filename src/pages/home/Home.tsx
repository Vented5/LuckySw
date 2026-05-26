import './s.css'

import { NavBar } from "../../components/Navbar/Navbar";

import { Carrusel } from "../../components/Carrousel/Carrusel";

import { AnimatedBg_1 } from '../../components/Background/bg1/AnimatedBg1';
import toothless from "../../assets/toothless-dancing.gif";
import Pato_gif from "../../assets/Pato-gif.gif"
import { Link } from 'react-router-dom';
import Meyotita from "../../assets/meyotita.png"
import Gothick from "../../assets/Gothick.jpg"

export function Home() {

  return (
    <>      
    
      
      
      <section id='home'>
        <AnimatedBg_1 />
          <nav>  
            <Link to='/components'>Home</Link>
            <Link to='/components'>Components</Link>
            <Link to='/404'>Portafilio</Link>
          </nav>
          
          <h1 id='title'>LuckySw</h1>

          <div className='intro'>
            <p>Hey Welcome to luckysw.</p>
          </div>

          <div className='img-box'>
            <img src={Pato_gif} alt="" />
          </div>
          
          
      

      <img id='wanderingToothless'
          src={toothless}
          alt={`Toothless`}
        />

        
      </section>
      <img id='wanderingMeyotita'
          src={Meyotita}
          alt={`Toothless`}
        />

        <img id='gothick'
          src={Gothick}
          alt={`Toothless`}
        />
      
      <div className='section'>
              Wenas
      </div>
      
    </>
  );
}
