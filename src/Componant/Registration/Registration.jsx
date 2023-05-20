import React from 'react'; 
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import back_img from '../images/contackbackimg1.jpg' 
import Contactfrom from '../Mainhomepage/Contactfrom/Contactfrom';
import Contact from '../Mainhomepage/Contact/Contact';
import '../Registration/Registration.css'
const Registration = () => {
    return (
        <>
             <section id="Maincontact" style={{ backgroundImage: `url(${back_img})` }}>
                <Container>
                    {/* <h1 className="heading contact"> Sing In <span> here </span> </h1>  */}
                    <h1 className='Sing'>Registration here</h1>
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

export default Registration;