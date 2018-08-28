import React, { Component } from 'react';
import Navbar from './Navbar';
import Hitlist from './Hitlist';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
 
  componentDidMount(){
  axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
    console.log(response)
    this.setState({
      data: response.data
    })
  }).catch(err => {
    console.log(err)
  })
  }

  render() {
    console.log(`this.state is`, this.state)
    
    const mappedHitlist = this.state.data.map(person => {
      console.log('person is ', person)
      return(
        <Hitlist key={person.name + person.image} {...person}/>
      )
    })

    const styles = {
      body: {
        backgroundColor: "grey",
      },
      wrapper: {
        height: "1000px",
        width: "50%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        margin: "auto"
      }
    }

    return (
      <div style = {styles.body}>
        <Navbar  />
        <div style = {styles.wrapper} >
          {mappedHitlist}
        </div>
      </div>
    );
  }
}

export default App;
