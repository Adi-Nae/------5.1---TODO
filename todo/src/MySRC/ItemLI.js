import React from 'react';
import './ItemLI.css'

class Item extends React.Component {    
    
    onClick = e => {
        console.log(e);
        if (e.target.parentElement.className === "open"){
            e.target.parentElement.className = "close"
        }else {
            if(e.target.className === "open"){
                e.target.className = "checked"
            }else{
                e.target.className = "open" 
            }
            
        } 
    };   
      
    render(){
        console.log(this.props);
        return (
            <li className="open" onClick={e => this.onClick(e)}>
                {this.props.itemList}
                <span className="x" onClick={e => this.onClick(e)} > x </span>    
            </li>
        );
    }

}

export default Item;
