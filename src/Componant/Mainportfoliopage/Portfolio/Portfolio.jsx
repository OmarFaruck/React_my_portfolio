import React from 'react';
import Container from 'react-bootstrap/Container';
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/newimg-4.jpg'
import img5 from '../../images/projectimg'
import img6 from '../../images/projectimg1'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Portfolio/Portfolio.css'
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <section className="portfolio" id="Portfolio">
                <Container>
                    <h1 className="heading"> <span> my </span> portfolio </h1>

                    <div className="box-container">
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                <Card style={{ width: '100%' }}>
                                    <NavLink to='#'><Card.Img variant="top" src={img1} style={{ height: '14.5rem' }} /></NavLink>
                                    <Card.Body>
                                        <Card.Title>PROJECT 01</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary_1">Go somewhere</Button>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                </Card>

                                <Card style={{ width: '100%', marginTop: '50px' }}>
                                    <NavLink to='#'><Card.Img variant="top" src={img2} style={{ height: '14.6rem' }} /></NavLink>
                                    <Card.Body>
                                        <Card.Title>PROJECT 02</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary_1">Go somewhere</Button>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                <Card style={{ width: '100%' }}>
                                    <NavLink to='#'><Card.Img variant="top" src={img3} style={{ height: '14.6rem' }} /></NavLink>
                                    <Card.Body>
                                        <Card.Title>PROJECT 03</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary_1">Go somewhere</Button>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                </Card>

                                <Card style={{ width: '100%', marginTop: '50px' }}>
                                    <NavLink to='#'><Card.Img variant="top" src={img4} style={{ height: '14.6rem' }} /></NavLink>
                                    <Card.Body>
                                        <Card.Title>PROJECT 04</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary_1">Go somewhere</Button>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="next">
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                <Card style={{ width: '100%' }}>
                                    <NavLink to='#'><Card.Img variant="top" src={img5} style={{ height: '14.6rem' }} /></NavLink>
                                    <Card.Body>
                                        <Card.Title>PROJECT 05</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary_1">Go somewhere</Button>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                <Card style={{ width: '100%' }}>
                                    <NavLink to='#'><Card.Img variant="top" src={img6} style={{ height: '14.6rem' }} /></NavLink>
                                    <Card.Body>
                                        <Card.Title>PROJECT 06</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary_1">Go somewhere</Button>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Portfolio;