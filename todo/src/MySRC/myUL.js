import React from 'react';
import Item from './ItemLI'
import './myUL'

const itemsList = [{id:0, itemList:"1"},{id:1, itemList:"2"},{id:2, itemList:"3"}];



class MyUL extends React.Component {
    render(){
        return (
            <ul>
                {itemsList.map( itemList => (
                        <Item 
                        key = {itemsList.id}
                        itemList = {itemsList.itemList}/>
                    ))}
            </ul>
        );
    }

}



export default MyUL;