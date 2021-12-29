import React from 'react';
import HomePlantsTiles from './HomePlantsTiles';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer'
import { useHistory } from 'react-router';

import titlePlant from '../../assets/img/titlePlant.png'
import logoPlant from '../../assets/img/logoPlant.png'
import entete from '../../assets/img/entete.jpg'
import { Fragment } from 'react';

const Home = () => {

  const plants = [
    {
      name: 'cactus',
      image: 'https://images.pexels.com/photos/4394243/pexels-photo-4394243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      action: "Cactus"
    },
    {
      name: 'flower',
      image: 'https://images.pexels.com/photos/4272604/pexels-photo-4272604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      action: "Flowers"
    },
    {
      name: 'tropical',
      image: 'https://i.pinimg.com/564x/d3/3c/1f/d33c1ffb0425a89af4dfda0f48db9daf.jpg',
      action: "Tropical"
    },
  ];

  const history = useHistory()

  const handleClick = action => {
    history.push(action)
  }



  const category = plants.map(plant => {
    return (
      <Fragment>

        <HomePlantsTiles
          name={plant.name}
          image={plant.image}
          action={() => handleClick(plant.action)}
        />

      </Fragment>
    )
  })

  return (
    <div className="container">
      <Navbar />

      <div className="header">
        <div className="headerImage">
          <img src={entete} alt=""></img>
        </div>
        <div className="titlePlant">
          <img src={titlePlant} alt=""></img>
        </div>
        <hr></hr>
      </div>


      <div id="Infos" className="Infos">
        <div className="InfosLogo">
          <img className="navLogo" src={logoPlant} alt=""></img>

          <h1>Qui sommes nous?</h1>

          <p>Nous avons souhaité créer une entreprise éco-responsable proposant des produits qui ont poussé près de chez vous pour limité le transport et la diffusion de CO2.  Pour respecter au mieux l’environnement nous nous engageons dans cette voie et souhaitons vous partager notre projet.
          </p>

          <p>Sur ce site vous pourrez retrouvé tout un panel de graines mais aussi de plantes qui ont poussé au sein même de nos jardins implanté dans vos régions. Nous avons également l’avantage de pouvoir de livrer dans les meilleurs délais qe qui garantis une meilleurs sécurités pour vos plantes. Sur ce site vous pourrez retrouvé tout un panel de graines mais aussi de plantes qui ont poussé au sein même de nos jardins implanté dans vos régions. Nous avons également l’avantage de pouvoir de livrer dans les meilleurs délais qe qui garantis une meilleurs sécurités pour vos plantes.</p>

          <p>Nous avons souhaité créer une entreprise éco-responsable proposant des produits qui ont poussé près de
          </p>

        </div>

      </div>

      <div id="tiles" className="tiles">
        <hr></hr>

        <h1>Nos produits</h1>

        <div className="tiles-plant">
          {category}
        </div>
      </div>
      <Footer />
    </div>
  )

}

export default Home;

