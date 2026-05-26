import { NavBar } from "../../components/Navbar/Navbar"
import { Grid } from "../../components/Grid/Grid"
import { Carrusel } from "../../components/Carrousel/Carrusel"

export function Components() {
    return (<>
        <NavBar></NavBar>
       <p>Wilkomen to the components page</p>
       
       <h1>Grid</h1>
        <Grid></Grid>

        <h1>Carrousel</h1>
        <Carrusel></Carrusel>
    </>)
}