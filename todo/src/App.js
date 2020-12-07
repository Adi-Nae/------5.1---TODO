import React from 'react';
import './App.css';

import Header from "./MySRC/header";
import MyUL from "./MySRC/myUL";

export const itemsList = [{ id: 0, itemList: "1" }];
let add;

class App extends React.Component {
  state={items:itemsList};
  
  add(item){
    const items=[...this.state.items] ;
    items.push(item);
    this.setState({items:items});
  }
 
  render(){
    return (
      <div className="App">
        <Header itemsList={this.state.items } add={this.add} />
        <br />
        <MyUL itemsList={this.state.items }/>
      </div>
    );
  }
}


export default App;
