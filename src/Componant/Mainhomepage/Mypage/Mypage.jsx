import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../images/myimg2'
import Button from 'react-bootstrap/Button'; 
import { Typewriter } from 'react-simple-typewriter'
import '../Mypage/Mypage.css'
import { NavLink } from 'react-router-dom';
const Mypage = () => {
 
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }

    return (
        < >

            <section className="home" id="home">
                <Container className='mt-4 mb-4'>
                    <Row className='align-items-center'>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <div className="content">
                                <span className="hi"> Hi There... </span>
                                <h3>My name is MD. <span> Omar Faruck </span> </h3>

                                <h3 className="post">i am a   <span style={{ fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['web designer', 'react js developer', 'PHP developer', 'Laravel developer']}
                                        loop={4}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={400}
                                        deleteSpeed={300}
                                        delaySpeed={250}
                                        onLoopDone={handleDone} 
                                    />
                                </span></h3>

                                <p className="text"> I Am A Full Stack Developer.I Will Give Your Project A Lot Of Importance And I Will Be Able To Complete It At The Specified Time, God Willing.</p>
                                <NavLink to="/About"><Button className="btn1">about me</Button></NavLink>
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <img src={img1} alt="" className='img-fluid mx-auto d-block img1' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Mypage;