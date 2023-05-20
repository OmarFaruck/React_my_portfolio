import React from 'react';
import NavLink from 'react-bootstrap/esm/NavLink';
import { IoMdTrophy, IoMdDesktop } from "react-icons/io";
import { HiTv } from "react-icons/hi2";
import { IoLogoWindows } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import '../Mycourseplan/Mycourseplan.css'

const Mycourseplan = () => {
    return (
        <>
            <section id="callaction">
                <div className="container">
                    <div className="aligncenter">
                        <h1>My Featured Plan</h1>
                        <p>When I first started programming, I found myself constantly thinking of new programs to make and writing those down in a list. I was addicted to the power of creation, and there was so much my brain wanted to make. If you're like that, then you probably already have an idea of what you want to make, and perhaps you have your own list.</p>
                    </div>
                    <div className="Course pt-4">
                        <div className="row">
                            <Col xxl="3" xl="3" lg="6" md="6" sm="12" className='pb-3'>
                                <div className="card mx-auto">
                                    <span className="icons1"><IoMdTrophy /> </span>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Web Development</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink href="#"><Button className='courses_btn'>Go somewhere</Button></NavLink>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl="3" xl="3" lg="6" md="6" sm="12" className='pb-3'>
                                <div className="card mx-auto">
                                    <span className="icons2"><HiTv /></span>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">UI Design</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink href="#"><Button className='courses_btn'>Go somewhere</Button></NavLink>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl="3" xl="3" lg="6" md="6" sm="12" className='pb-3'>
                                <div className="card mx-auto">
                                    <span className="icons3"><IoMdDesktop /></span>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Interaction</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink href="#"><Button className='courses_btn'>Go somewhere</Button></NavLink>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl="3" xl="3" lg="6" md="6" sm="12" className='pb-3'>
                                <div className="card mx-auto">
                                    <span className="icons4"><IoLogoWindows /></span>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">User Experiance</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink href="#"><Button className='courses_btn'>Go somewhere</Button></NavLink>
                                    </div>
                                </div>
                            </Col>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mycourseplan;