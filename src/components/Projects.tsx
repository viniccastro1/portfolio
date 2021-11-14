import React, { useEffect, useState } from 'react';
import { Badge, Col, Row, Button, Navbar, Container, Image, Collapse } from 'react-bootstrap';
import aboutMeImg from '../media/me.jpg';
//import MyVideo from "../media/myVideo.mp4";
import LangText from './LangText';
import {showMoreBtnAnim, HoverOptions} from '../animations/animations';


function Projects(props:any) {

    function Project(props:any){
        const [open, setOpen] = useState(false);
        return (
            <>
            <Row className='justify-content-center pb-2 pt-5 mb-3 text-light my-bg-gradient'>
                
                <Col lg={8}>
                    <Row className='mb-3'>
                        <Col sm={3}>
                            <Image src={aboutMeImg} fluid></Image>
                        </Col>
                        <Col sm={9}>
                            <p className='fw-bold fs-1'>Ironizador de Texto</p>
                            <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam recusandae voluptas ea, vitae rem assumenda, dolores cumque saepe atque hic vero similique illo incidunt, ducimus sed corrupti. Architecto, saepe.</p>
                        </Col>   
                    </Row>
                    
                    <Row>
                        <Col>
                            <Button 
                            className='w-100 show-more-btn fs-3 py-0' variant='light'
                            onMouseEnter={(e)=>{showMoreBtnAnim(HoverOptions.MouseIn, e.target)}} 
                            onMouseLeave={(e)=>{showMoreBtnAnim(HoverOptions.MouseOut, e.target)}} 
                            onClick={() => setOpen(!open)}> 
                                I'm a button 
                            </Button>
                        </Col>
                        
                    </Row>

                </Col>
            </Row>

        <Collapse in={open}>
            <Row className='bg-light'>
                <video width="320" height="240" controls>
                    <source src='' type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
            </Row>
        </Collapse>
        </>

        )
    }

    return (
        <Row>

            <Col>
                <Row>
                    <LangText className='fs-2 fw-bold text-primary text-center pb-3 my-5 text-decoration-underline'
                    en={'My other projects:'}
                    pt={'Meus outros projetos:'}
                    />
                </Row>
                <Project></Project>
                <Project></Project>
            </Col>
        </Row>
    );
}

export default Projects;
