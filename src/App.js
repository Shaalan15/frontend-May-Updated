// Importing React
import React from 'react';
// Importing the HomePage
import HomePage from './components/mainPage/HomePage';
// Importing LayoutRoute
import LayoutRoute from './LayoutRoute';
import LayoutRoute2 from './LayoutRoute2';
// Importing Login page
import LoginPage from './components/registration/LoginPage';
// Importing Registration page
import SignupPage from './components/registration/SignupPage';
// Importing User Profile
import Profile from './components/userProfile/Profile';
// Importing css
import './App.css'
// Importing the react-router things needed
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product1 from './components/misc/ProductPages/ProdPage1';
import Product2 from './components/misc/ProductPages/ProdPage2';
import Product3 from './components/misc/ProductPages/ProdPage3';
import Product4 from './components/misc/ProductPages/ProdPage4';
import Product5 from './components/misc/ProductPages/ProdPage5';
import Challenges from './components/challenges/ChallengePage';
import ArtGallery from './components/mainPage/ArtGallery';



// Actual App function, has our code
function App() {
  return (

    <Router>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomePage} />
        <LayoutRoute2 path="/login" exact={true} component={LoginPage} />
        <LayoutRoute2 path="/register" exact={true} component={SignupPage} />
        <LayoutRoute2 path="/user" exact={true} component={Profile} />
        <LayoutRoute path="/art-gallery" exact = {true} component ={ArtGallery} />
        <LayoutRoute path="/product-1" exact = {true} component ={Product1} />
        <LayoutRoute path="/product-2" exact = {true} component ={Product2} />
        <LayoutRoute path="/product-3" exact = {true} component ={Product3} />
        <LayoutRoute path="/product-4" exact = {true} component ={Product4} />
        <LayoutRoute path="/product-5" exact = {true} component ={Product5} />
        <LayoutRoute path="/challenges" exact = {true} component ={Challenges} />
      </Switch>
    </Router>

  );
}

export default App;
