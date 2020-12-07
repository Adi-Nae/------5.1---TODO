import React from 'react';
import './header.css'
import { itemsList } from './myUL';

let updateditemsList = itemsList; 
let keyList;     

const initialState = {
    myTitle: ""
};

class Header extends React.Component {
    state = initialState;
    
      change = e => {
        console.log(e.target.name +" : "+ e.target.value);
        this.setState({
          [e.target.name]: e.target.value
        });
      };


    onClick = e => {
        console.log("Add : "+ this.state.myTitle)

        // בדיקת חוקיות
        if (!this.state.myTitle) {
            alert("את/ה חייב/ת לכתוב משהו!  לא ניתן להשאר שדה זה ריק");
        } else {
            // יצירת אובייקט חדש
            console.log(updateditemsList);

            keyList = updateditemsList.length;
            updateditemsList.push({id:keyList, itemList:this.state.myTitle})


            // מחיקת התוכן
            console.log(this.state);
            this.setState(initialState);
        }


    };  
    
      
    render(){
        return (
            <div className="header"> 
                <h2>הרשימה שלי</h2>
                <span  
                    className="addBtn"
                    onClick={e => this.onClick(e)}>
                        הוסף
                </span>
                <input
                    name="myTitle"
                    placeholder="כותרת..."
                    value={this.state.myTitle}
                    onChange={e => this.change(e)} />
            </div>
        );
    }

}

export default Header