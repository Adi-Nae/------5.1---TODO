import React from 'react';
import './App.css';

import Header from "./MySRC/header";
import MyUL from "./MySRC/myUL";

export const itemsList = [ ];
let add;

class App extends React.Component {
  constructor() {
    super()
    this.state = {items:itemsList}
    this.add = this.add.bind(this);
}

  
  add(item){
    itemsList.push(item);   
    this.setState({item:itemsList});
  }
 
  render(){
    return (
      <div className="App">
        <Header itemsList={this.state.items } add={this.add} />
        <br />
        <MyUL itemsList={this.state.items} />
      </div>
    );
  }
}


export default App;
