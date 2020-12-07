import React from 'react';
import Item from './ItemLI'
import './myUL'

class MyUL extends React.Component {

    render(){
        return (
            <ul>
                {this.props.itemsList.length && this.props.itemsList.map( itemList => (      
                        <Item 
                        key = {itemList.id}
                        itemList = {itemList.itemList}/>
                    ))}
            </ul>
        );
    }

}



export default MyUL;