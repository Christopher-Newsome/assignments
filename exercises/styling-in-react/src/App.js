import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Info from './Components/Body/Info/index';
import Card from './Components/Card/index';
import Footer from './Components/Footer/index';
import Parallax from './Components/Parallax'

class App extends Component {
 
  render() {

    return (
      <div>
        <Navbar image = "https://i.pinimg.com/736x/a0/13/9f/a0139fb117844389f2895703ac089898--pokemon-stuff-stupid-pokemon.jpg" />
    
        <Parallax image = "http://cdn.ebaumsworld.com/mediaFiles/picture/2020676/82792676.jpg" />

        <Info image = "https://orig00.deviantart.net/0eef/f/2016/170/7/a/realistic_pokemon_season_2_by_arvalis-da6ucyl.jpg" />

        <Card />

        <Info image = "https://orig00.deviantart.net/0eef/f/2016/170/7/a/realistic_pokemon_season_2_by_arvalis-da6ucyl.jpg" />
        
        <Card />

        <Parallax image = "http://cdn.ebaumsworld.com/mediaFiles/picture/2020676/82792676.jpg" />
  
        <Footer image = "http://cdn.escapistmagazine.com/media/global/images/library/deriv/854/854763.jpg" />
      </div>
    );
  }
}

export default App;
