import React from "react";

const Order = ({closeHour}) => {
    return (
        <div className="order">
            <p>{new Date().toLocaleTimeString()} We're open until {closeHour}:00!</p>
            <button className="btn">Order</button>  
        </div>   
    )
}

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                    <Order closeHour={closeHour}/>
                ) : (
                    <p>We're happy to welcome you between {openHour}:00 to {closeHour}:00!</p>
                )
            }
        </footer>
    )
}

export default Footer;