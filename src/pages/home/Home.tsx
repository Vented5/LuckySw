import './s.css'
import { AnimatedBg } from "../../components/Background/AnimatedBg";
import { NavBar } from "../../components/Navbar/Navbar";

import { Carrusel } from "../../components/Carrousel/Carrusel";
import { Grid } from "../../components/Grid/Grid";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export function Home() {
  return (
    <>
      <NavBar />
      <Sidebar/>
      <AnimatedBg />
      <section id='home'>
        <div>
          <p>Hey Welcome to luckysw.</p>
        </div>
      <Carrusel></Carrusel>
      </section>
      <Grid></Grid>
      
    </>
  );
}
