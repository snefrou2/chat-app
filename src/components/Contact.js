import PropTypes from 'prop-types';
import React from 'react';
import './contact.css';



const Contact = props => {
    return (
        <div className ="Contact">
            <img src = {props.avatar} className="avatar" alt ="avatar"/>
            <div>
                <h4 className= "name">{props.name}</h4> 
                <div className = "status">
                <span className = {props.online ? 'status-online': 'status-offline'}></span>
                <p className = "status-text">{ props.online ? "online":"offline"}</p>   
                </div>
            </div>
        </div>
      
    );
  }
  

 Contact.propTypes = {
    name: PropTypes.string,
    online: PropTypes.bool,
  };
  export default Contact;