import React from 'react';
import "../style/About.css";
import kitchen from "../Assets/ownerPage.jpg";
import { motion } from "motion/react";


const About = () => {
    return (
        <div className='aboutBox' id='aboutUs'>
            <div className="clientText">
                <h1 className='FirstTextabout'>Who</h1> <h1 className='secondTextAbout'>We Are?</h1>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className='ownerInfo'>
                <img className="ownerComImg" src={kitchen} />

                <div className="ownerInfoBox">
                    <h1>Founder : Ashish Sata</h1>
                    <h3>Sata International</h3>
                    <p>Conatct Us :<span style={{ color: "gray" }}>+91 98985 40840</span> </p>
                    <p>Email : <span style={{ color: "gray" }}>sata.inernational91@gamil.com</span></p>
                    <p>Head Office : <span style={{ color: "gray" }}>Ploat No.37, Valinath Society, U-M Road,Bhatar, Surat 395001,Gujarat,India</span></p>
                    <p style={{ color: "gray", fontSize: "1.5rem" }}>"A clean kitchen begins with fresh air—our chimneys ensure a smoke-free, odorless cooking experience every day."  ~ Ashish Sata</p>
                </div>

            </motion.div>
        </div>
    );
}

export default About;
