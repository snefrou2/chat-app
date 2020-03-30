import React from 'react';
import './contact.css';

const personnage = {
    name : "Arielle Mermaid",
    avatar : 'https://media.cultura.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/c/a/canevas-12x12-ariel-8435282505738_1.jpg?t=1509811988',
    status : false
}


function Contact() {
    return (
        <div className ="Contact">
            <img src = {personnage.avatar} className="avatar"/>
            <div>
                <h4 className= "name">{personnage.name}</h4> 
                <div className = "status">
                    <p className = "status-texte">{ personnage.status ? "online":"offline"} { personnage.status ? 
                    <span className= "status-online"></span>:<span className= "status-offline"></span>}</p>
                   
                </div>
            </div>
        </div>
      
    );
  }
  export default Contact;