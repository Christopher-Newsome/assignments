import React, { Component } from 'react';
import Input from './Input';
import Output from './Output'

class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      placeOfBirth: '',
      phoneNumber: '',
      favoriteFood: '',
      aboutYou: '',
      data: []
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const newBadge = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      placeOfBirth: this.state.placeOfBirth,
      phoneNumber: this.state.phoneNumber,
      favoriteFood: this.state.favoriteFood,
      aboutYou: this.state.aboutYou
      }
      this.setState(prevState => ({
        data: [...prevState.data, newBadge],
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phoneNumber: '',
        favoriteFood: '',
        aboutYou: ''
      }))
    }

 

  render() {
    return (
      <div>
        <Input 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstName = {this.state.firstName}
          lastName = { this.state.lastName}
          email = { this.state.email}
          placeOfBirth = { this.state.placeOfBirth}
          phoneNumber = { this.state.phoneNumber}
          favoriteFood = { this.state.favoriteFood}
          aboutYou = { this.state.aboutYou}
          />
        <div className="list-container">
          { this.state.data.map(info => <Output {...info} />)}
        </div>
      </div>
    )
  }
}

export default App;
