import React from 'react';
import { useState } from 'react';
import './stylesheets/App.scss';
import { Component } from 'react'
import HomePlantsTiles from './components/HomePlantsTiles'
import Navbar from './components/NavBar'
import plants from './plants'
import { useHistory } from 'react-router'
import titlePlant from './img/titlePlant.png'
import { Fragment } from 'react';

const App = () => {

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
      <Navbar/>
      <div className="titlePlant">
        <img src={titlePlant} ></img>
      </div>
      <div className="header-plant">
        {category}
      </div>
    </div>
  )

}

export default App;

