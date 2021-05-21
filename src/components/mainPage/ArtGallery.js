// Importing NavBar
import NavBar from './LandingItems/navbar/NavBar';
// Importing Footer 
import Footer from './LandingItems/footer/Footer';
import Product from '../misc/ProductPages/Product';
import React, {useEffect, useState} from "react";
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


function Paintings(){
    const [paintings, setpaintings] = useState([{
        title: '',
        description:'',
        price: '',
        color: '',
        productImage: '',
        associatedUsername: ''
    }])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/product/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setpaintings(jsonRes));
    })

    return <div className="container">
        <h1>Art Gallery</h1>
        {paintings.map(painting =>
        <div>
            <Product 
            productImage={painting.productImage} 
            title={painting.title}
            description={painting.description}
            price={painting.price}
            associatedUsername={painting.associatedUsername}
            color={painting.color}
            />
            </div>
        )}
    </div>
}

export default Paintings;