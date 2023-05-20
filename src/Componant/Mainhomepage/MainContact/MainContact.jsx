import React from 'react'; 
import Container from 'react-bootstrap/Container';
import '../MainContact/MainContact.css' 
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import back_img from '../../images/contackbackimg1.jpg' 
import Contactfrom from '../Contactfrom/Contactfrom';
import Contact from '../Contact/Contact';
import '../MainContact/MainContact.css'  
const MainContact = () => {
    return (
        <>
            <section id="Maincontact" style={{ backgroundImage: `url(${back_img})` }}>
                <Container>
                    <h1 className="heading contact"> Sing In <span> here </span> </h1> 
                    <Row>
                        <Col xxl="6" xl="6" lg="6" md="6" sm="12">
                            <Contactfrom/>
                        </Col>
                        <Col xxl="6" xl="6" lg="6" md="6" sm="12">
                             <Contact/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default MainContact;