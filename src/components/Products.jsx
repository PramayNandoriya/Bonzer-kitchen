import React, { useState } from 'react';
import "../style/Product.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
//DATA
import { productData } from './data';
import { inductionProducts } from './data';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { motion } from "motion/react";

// console.log(inductionProducts);

const Products = () => {
    const [value, setValue] = useState("1");
    const [page, setPage] = useState(1);
    const productsPerPage = 6;

    // Calculate start and end index for pagination
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);

    // Induction products pagination state
    const [inductionPage, setInductionPage] = useState(1);
    const inductionProductsPerPage = 4;
    const indexOfLastInductionProduct = inductionPage * inductionProductsPerPage;
    const indexOfFirstInductionProduct = indexOfLastInductionProduct - inductionProductsPerPage;
    const currentInductionProducts = inductionProducts.slice(indexOfFirstInductionProduct, indexOfLastInductionProduct);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
        setPage(1); // Reset to first page when switching tabs
        setInductionPage(1); // Reset induction products page when switching tabs
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleInductionChangePage = (event, value) => {
        setInductionPage(value);
    };

    return (
        <div className='ProductBox' id='products'>
            <div className="clientText">
                <h1 className='FirstText'>It's Bronzer's</h1> <h1 className='secondText'>Products</h1>
            </div>

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box className="productTab" sx={{ borderBottom: 0, borderColor: 'divider' }}>
                        <TabList onChange={handleChangeTab} aria-label="product categories">
                            <Tab label="CHIMNEYS" value="1" />
                            <Tab label="ELECTRIC INDUCTION" value="2" />
                        </TabList>
                    </Box>

                    <Box>
                        <TabPanel className='prodcutsConatiners' value="1">
                            {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
                                currentProducts.map((items, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: -300 }}
                                        transition={{ duration: 1.2 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        className='proWrapper' key={index}>
                                        <img className='proImg' src={items.img} alt={items.name} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 0 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 3, ease: "easeIn" }}
                                            viewport={{ once: false }}
                                            className='proDetails'>
                                            <h1 className='proName'>{items.name}</h1>
                                            <ul>
                                                {items.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </motion.div>
                                ))
                            ) : (
                                <p>No products available</p> // Handle empty state
                            )}

                        </TabPanel>
                        {value == "1" ? <Stack spacing={2} alignItems="center" sx={{ marginTop: 2, marginBottom: 5  }}>
                            <Pagination
                                count={Math.ceil(productData.length / productsPerPage)}
                                page={page}
                                onChange={handleChangePage}
                                color="primary"
                            />
                        </Stack> : ""}



                        <TabPanel className='prodcutsConatiners' value="2">
                            {Array.isArray(currentInductionProducts) && currentInductionProducts.length > 0 ? (
                                currentInductionProducts.map((items, index) => (
                                    <div className='proWrapper' key={index}>
                                        <img className='proImg' src={items.img} alt={items.name} />
                                        <div className='proDetails'>
                                            <h1 className='proName'>{items.name}</h1>
                                            <p style={{ color: "#1976d2", fontSize: "1.5rem", fontWeight: "600" }}>{items.p}</p>
                                            {items.features && (
                                                <ul>
                                                    {items.features.map((feature, i) => (
                                                        <li key={i}>{feature}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No induction products available</p> // Handle empty state
                            )}

                        </TabPanel>
                       
                       {
                        value == "2" ? <Stack spacing={2} alignItems="center" sx={{ marginTop: 2, marginBottom: 5 }}>
                            <Pagination
                                count={Math.ceil(inductionProducts.length / inductionProductsPerPage)}
                                page={inductionPage}
                                onChange={handleInductionChangePage}
                                color="primary"
                            />
                        </Stack> : " "
                       } 
                    </Box>
                </TabContext>
            </Box>
        </div>
    );
};

export default Products;
