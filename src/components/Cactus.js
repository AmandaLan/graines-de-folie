import React from 'react';
import '../stylesheets/App.scss';
import { Component } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import titlePlant from '../img/titlePlant.png';
import logoPlant from '../img/logoPlant.png';
import entete from '../img/entete.jpg';


const Cactus = () => {
    return (
        <div className="container">
            <Navbar />
            <h1>Nous sommes les cactus</h1>
            <Footer />
        </div>
    )
}
export default Cactus;
