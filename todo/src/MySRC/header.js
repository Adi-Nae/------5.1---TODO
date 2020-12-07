import React from 'react';
import './header.css'
  

const initialState = {
    myTitle: ""
};

class Header extends React.Component {
    state = initialState;
    
    change = e => {
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
            console.log(this.props.itemsList.length);
            this.props.add({id:this.props.itemsList.length, itemList:this.state.myTitle});

            // מחיקת התוכן
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

export default Header;