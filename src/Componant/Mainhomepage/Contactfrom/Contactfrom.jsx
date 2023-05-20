import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Contactfrom/Contactfrom.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
const Contactfrom = () => {
    return (
        <>
            <section id="From">
                <Container>
                    <Row>
                        <Form.Group className="mb-3 my-4">
                            <Form.Label className='text-light'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='text-light'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div id='messege-div'></div>

                        <div className="new_link new">
                            <p className="nav-link reglink">New user? <NavLink to="/registration">registration.</NavLink></p>
                        </div>


                        <Button className="btn text-light mt-3 mb-5 submit">Submit</Button>

                        {/* <GoogleSingUp />
                  <FaceBookSingUp />
                  <GitHubSingUp />
                  <Gmail /> */}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contactfrom;