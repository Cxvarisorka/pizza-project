import React from "react";

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if(hour >= openHour && hour <= closeHour){
    //     alert("We're currently open!")
    // } else{
    //     alert("We're currently closed!")
    // }

    return (
        <footer className="footer">
            {isOpen && (
                    <div className="order">
                        <p>{new Date().toLocaleTimeString()} We're open until {closeHour}:00!</p>
                        <button className="btn">Order</button>  
                    </div>   
                )
            }
        </footer>
    )
}

export default Footer;