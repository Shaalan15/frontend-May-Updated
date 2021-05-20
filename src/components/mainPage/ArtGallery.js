// Importing NavBar
import NavBar from './LandingItems/navbar/NavBar';
// Importing Footer 
import Footer from './LandingItems/footer/Footer';
import Cards from '../mainPage/LandingItems/testimonials/Cards';
import Grids from '../misc/Grids';
// Importing the css
import './LandingItems/navbar/NavBar.css'
import './LandingItems/testimonials/Cards.css'
import './LandingItems/footer/Footer.css'
// Importing motion
import { motion } from 'framer-motion'
// Importing styles
import styled from 'styled-components';
import '../misc/Assets/bg.css'
const Margin = styled.div`
    height: 90vh;
`;


function ArtGallery(props)
{
    return(
        <div className="App art-gallery">
            <div className="artstart">
                <h1 className="artstart">Art Gallery</h1>
            </div>
                <Grids/>
        </div>
    );
}

export default ArtGallery;