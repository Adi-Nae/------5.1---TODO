import React from 'react';
import Item from './ItemLI'
import './myUL'

class MyUL extends React.Component {

    render(){
        if (this.props.itemsList.length>0){
            return (
                <ul>
                    {this.props.itemsList.length && this.props.itemsList.map( itemList => (      
                            <Item 
                            key = {itemList.id}
                            itemList = {itemList.itemList}/>
                        ))}
                </ul>
            );
        } else {
            return (
                <div className="empty"> 

                </div>
            );
        }
        
    }

}



export default MyUL;