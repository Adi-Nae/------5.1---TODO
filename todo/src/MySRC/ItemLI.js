import React from 'react';
import './ItemLI.css'

class Item extends React.Component {    


    
    onClick = e => {
        console.log(e);
        if (e.target.parentElement.className == "open"){
            e.target.parentElement.className = "close"
        }else {
            console.log(e.target.className);
            if(e.target.className == "open"){
                e.target.className = "checked"
            }else{
                e.target.className = "open" 
                console.log(e.target.className);
            }
            
        } 
    };  

   
    
    
    render(){
        return (
            <li className="open" onClick={e => this.onClick(e)}>
                {props.item}
                <span className="x" onClick={e => this.onClick(e)} > x </span>    
            </li>
        );
    }

}

export default Item;




/*
function  Item(props){    
    console.log(props);
    return (
        <li className="open" onClick={e => this.onClick(e)}>
            {props.item}
            <span className="x" onClick={e => this.onClick(e)}> x </span>
        </li>
    );
}

function onClick(e){
    console.log(e);
    if (e.target.parentElement.className == "open"){
        e.target.parentElement.className = "close"
    }else {
        console.log(e.target.className);
        if(e.target.className == "open"){
            e.target.className = "checked"
        }else{
            e.target.className = "open" 
            console.log(e.target.className);
        }
        
    } 
};
*/