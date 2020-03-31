import PropTypes from 'prop-types';
import React from 'react';
import './contact.css';




const Contact = props => {
    return (
        <div className ="Contact">
            <img src = {props.user.avatar} className="avatar" alt ="avatar"/>
            <div>
                <h4 className= "name">{props.user.name}</h4> 
                <div className = "status">
                <span className = {props.user.online ? 'status-online': 'status-offline'}></span>
                <p className = "status-text">{ props.user.online ? "online":"offline"}</p>   
                </div>
            </div>
        </div>
      
    );
  }
  

 Contact.propTypes = {
    characterFirstName: PropTypes.string.isRequired,
    characterLastName: PropTypes.string.isRequired,
  };
  export default Contact;