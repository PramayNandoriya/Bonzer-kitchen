import React from "react";
import "../style/About.css";
import { motion } from "framer-motion";
import { XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, ResponsiveContainer } from "recharts";

const About = () => {
  const chartData = [
    { name: "2020", uv: 5, pv: 240, amt: 240 },
    { name: "2021", uv: 14, pv: 240, amt: 240 },
    { name: "2022", uv: 18, pv: 240, amt: 240 },
    { name: "2023", uv: 20, pv: 240, amt: 240 },
    { name: "2024", uv: 22, pv: 240, amt: 240 },
    { name: "2025", uv: 25, pv: 240, amt: 240 },
  ];

  return (
    <div className="aboutBox" id="aboutUs">
      <div className="clientText">
        <h1 className="FirstTextabout">Who</h1>
        <h1 className="secondTextAbout">We Are?</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="ownerInfo"
      >
        <div className="ownerInfoBox">
          <h1>Founder : Ashish Sata</h1>
          <h3>Sata International</h3>
          <p>
            Contact Us: <span style={{ color: "gray" }}>+91 98985 40840</span>
          </p>
          <p>
            Email: <span style={{ color: "gray" }}>sata.inernational91@gmail.com</span>
          </p>
          <p>
            Head Office:<span style={{ color: "gray" }}>
              Plot No.37, Valinath Society, U-M Road, Bhatar, Surat 395001, Gujarat, India
            </span>
          </p>
          <p style={{ color: "gray", fontSize: "1.5rem" }}>
            "A clean kitchen begins with fresh air—our chimneys ensure a smoke-free, odorless cooking experience every
            day."
            <br /> ~ Ashish Sata
          </p>
        </div>

        <div className="bronzerDetails">
          <h1 style={{ color: "#1976d2" }}>"Why Choose Bronzer?"</h1>
          <p>
            ¬ Bronzer, recognized as the best kitchen chimney brand in India, is a leading name in the world of kitchen
            appliances. Our commitment to quality and innovation has made us the best kitchen appliances brand in India.
          </p>
          <p>¬ Our Kitchen Chimneys are designed to eliminate smoke and odors, providing you with a fresh and clean cooking environment.</p>
          <p>¬ Our cooktop stoves are designed for efficiency and ease of use, making your cooking experience enjoyable.</p>
          <p>¬ The Gas Hobs from Bronzer are a perfect blend of style and functionality, designed to make your kitchen look modern and sleek.</p>
          <p>¬ We believe in delivering products that enhance your kitchen experience. Trust us for quality, reliability, and excellence.</p>
          <p>¬ Kitchen Appliances That Simplify Your Life And Suit Your Needs Along With Enhancing Your Kitchen Design.</p>
          <p>¬ No more smudges on the ceiling with smart kitchen appliances that auto cleans it.</p>
        </div>
      </motion.div>

      {/* Responsive Chart */}
      <div className="chart">
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#1976d2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h2 className="lineChartHeading">
      Our Successful Sales Over the Past Five Years.
      </h2>
    </div>
  );
};

export default About;
