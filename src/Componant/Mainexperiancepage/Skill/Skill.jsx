import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaAngleDoubleRight } from "react-icons/fa";
import '../Skill/Skill.css'
const Skill = () => {
    return (
        <>
            <section className="skills mt-4 mb-3" id="skills">
                <Container>
                    <h1 className="heading"> <span> my </span> skills </h1>
                    <Row className='align-items-center'>
                        <Col xxl={6} xl={6} lg={12} md={12} sm={12}>
                            <p>Web Design</p>
                            <ProgressBar variant="success" now={95} />
                            <br />
                            <p>Javascript Development</p>
                            <ProgressBar variant="danger" now={70} />
                            <br />
                            <p>react js Development</p>
                            <ProgressBar variant="info" now={80} />
                            <br />
                            <p>Php Development</p>
                            <ProgressBar variant="warning" now={85} />
                            <br />
                            <p>Laravel Development</p>
                            <ProgressBar variant="danger" now={70} />

                        </Col>

                        <Col xxl={6} xl={6} lg={12} md={12} sm={12}>

                            <div className="skill_box">

                                <div className="skills_at">
                                    <h3 className='skill_text'><FaAngleDoubleRight /> 5+ </h3>
                                    <p className='skill_text'>years of experience</p>
                                </div>
                                <div className="skills_at">
                                    <h3 className='skill_text'> <FaAngleDoubleRight /> 50+ </h3>
                                    <p className='skill_text'>happy clients</p>
                                </div>

                                <div className="skills_at">
                                    <h3 className='skill_text'> <FaAngleDoubleRight /> 50+ </h3>
                                    <p className='skill_text'>projects completed</p>
                                </div>
                                <div className="skills_at">
                                    <h3 className='skill_text'> <FaAngleDoubleRight /> 1+ </h3>
                                    <p className='skill_text'>awards won</p>
                                </div>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Skill;