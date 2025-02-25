import React from 'react';
import "../style/main.css";
import main from "../Assets/Home.jpg";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react"


const Main = () => {


    return (

        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            viewport={{ once: false }}

            className='wrapper' id='home'>
            <img className='mainImg' src={main} />
            <div className='introBox'>
                <TypeAnimation
                    className='intro'
                    sequence={[
                        'Elevate your cooking experience with our stylish, efficient kitchen chimneys....'
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={{ Infinity }}
                />
            </div>

        </motion.div>




    );
}

export default Main;