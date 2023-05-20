import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaReact, FaLaravel, FaReacteurope, FaDesktop } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Service/Service.css'

const Service = () => {
    return (
        <>
            <section className="service" id="service">
                <Container className='mt-4 mb-4'>
                    <h1 className="heading service"> <span> my </span> services </h1>

                    <div className="box-container">
                        <Row>
                            <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                <div className="service_box">
                                    <NavLink to="./project1/index.html" target="_blank" className='nav-link'>
                                        <p><FaCode /></p>
                                        <h3>web design</h3>
                                        <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p>
                                    </NavLink>
                                </div>

                                <div className="service_box">
                                    <NavLink to="./project4/index.html" target="_blank" className='nav-link'><p><FaPaintBrush /></p>
                                        <h3>PHP development</h3>
                                        <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p></NavLink>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                <div className="service_box">
                                    <NavLink to="./project2/index.html" target="_blank" className='nav-link'>
                                        <p><FaReact /></p>
                                        <h3>react design</h3>
                                        <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p></NavLink>
                                </div>
                                <div className="service_box">
                                    <NavLink to="./project2/index.html" target="_blank" className='nav-link'>
                                        <p><FaReacteurope /></p>
                                        <h4>Javascript development</h4>
                                        <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p></NavLink>
                                </div>
                            </Col>

                            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>


                                <div className="service_box">
                                    <NavLink to="./project6/index.html" target="_blank" className='nav-link'>
                                        <p><FaDesktop /></p>
                                        <h3>responsive design</h3>
                                        <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p></NavLink>
                                </div>


                                <div className="service_box">
                                    <NavLink to="./project4/index.html" target="_blank" className='nav-link'>
                                        <p><FaLaravel /></p>
                                        <h4>LARAVEL development</h4>
                                        <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p></NavLink>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </section>
        </>
    );
};

export default Service;