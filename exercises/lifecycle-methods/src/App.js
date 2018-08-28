import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      backgroundColor: 'yellow',
      fontSize: '10px',
      borderRadius: '',
      top: 0,
      left: 0
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", (e) => {
      if(e.code === "KeyA"){
        this.setState({
          backgroundColor: "green",
          fontSize: "100px",
          borderRadius: "20px"
        }) 
      } else if(e.code === "KeyB"){
          this.setState({
            backgroundColor: "brown",
            fontSize: "50px",
            borderRadius: "50%"
          })
        } else if(e.code === "KeyC"){
          this.setState({
            backgroundColor: "orange",
            fontSize: "200px",
            borderRadius: "0px"
          })
        } else if(e.code === "ArrowUp"){
          this.setState(prevState => ({
            top: prevState.top - 25
          }))
        } else if(e.code === "ArrowDown"){
          this.setState(prevState => ({
            top: prevState.top + 25
          }))
        } else if(e.code === "ArrowLeft"){
          this.setState(prevState => ({
            left: prevState.left - 25
          }))
        } else if(e.code === "ArrowRight"){
          this.setState(prevState => ({
            left: prevState.left + 25
          }))
        }
      })
    }
  

  componentWillUnmount(){
    window.addEventListener("keydown", null)
  }


  render() {
    const styles = {
      container: {
        backgroundColor: this.state.backgroundColor,
        fontSize: this.state.fontSize,
        borderRadius: this.state.borderRadius,
        textAlign: "center",
        position: "absolute",
        top: this.state.top,
        left: this.state.left,
        transition: "1s"
      }
    }
    return (
        <div style = {styles.container} >
          Hey World
        </div>
    );
  }
}

export default App;
