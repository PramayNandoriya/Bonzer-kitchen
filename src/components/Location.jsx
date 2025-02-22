import React from 'react';
import "../style/Location.css"
const Location = () => {
    return (
        <div
        
        className='locationBox' id='location'>
             <div className="clientText">
             <h1 className='FirstText'>Our</h1> <h1 className='secondText'>Location</h1>
             </div>

             <div className="map"><iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=Ploat%20No.37,%20Valinath%20Society,%20U-M%20Road,Bhatar,%20Surat%20395001,Gujarat,India+(Bonzer%20Kitchen)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">best drones</a></iframe></div>
        </div>
    );
}

export default Location;
