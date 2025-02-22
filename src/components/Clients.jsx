import React from 'react';
import "../style/clients.css"
import c1 from "../Assets/c1.png"
import c2 from "../Assets/c2.jpeg"
import c3 from "../Assets/cs3.jpeg"
import c4 from "../Assets/cs4.jpg"
import c5 from "../Assets/cs5.png"
import { motion } from "motion/react"



const Clients = () => {
    return (
        <motion.div 
        initial={{opacity:0 , x:200}}
        transition={{duration:1.2 }}
        whileInView={{opacity:1, x:0}}
        viewport={{once:false}}
        className='ClientsBox'>
            <div className="clientText">
                <h1 className='FirstText'>Our Top</h1> <h1 className='secondText'>Clients</h1>
            </div>

            <div className='CustomerImg'>
                <img className='imgsOfCustomers' src={c1}/>
                <img className='imgsOfCustomers' src={c2}/>
                <img className='imgsOfCustomers' src={c3}/>
                <img className='imgsOfCustomers' src={c4}/>
                <img className='imgsOfCustomers' src={c5}/>
                
                
            </div>

            

        </motion.div>
    );
}

export default Clients;
