import React, { useEffect, useState } from 'react';
import { Badge, Col, Row, Button } from 'react-bootstrap';
import introPic from '../media/introPic.png';
import LangText from './LangText';
import downArrow from '../media/down_arrow.svg';
import {learnMoreAnimIn, learnMoreAnimOut} from '../animations/animations' 


function Intro(props:any) {

    return (
        <>
        <Row>
            <Col className='introBanner p-0 bg-primary'>
                <div className='w-25em mx-auto introContent'>
                    <Row>
                        <img src={introPic} className='introPic mx-auto mb-3'></img>
                    </Row>
                    <Row className='mb-3'>
                        <h1 className='fw-bold display-5 text-center lh-1 m-0'>Vinicius de Castro</h1>
                        <h2 className='text-secondary display-7 text-center lh-1'>Web developer</h2>
                    </Row>
                    <Row>
                        <LangText
                        className='fs-4 text-center'
                        en={<p><span className='fw-bold text-primary'>Front-end developer</span> whom loves to create interfaces and work with logic. I have been developing websites and softwares for about two years.</p>}
                        pt={<p><span className='fw-bold text-primary'>Desenvolvedor front-end</span> que ama criar interfaces e trabalhar com lógica. Tenho desenvolvido programas e sites por dois anos.</p>}
                        />
                    </Row>

                    <Row>
                        <LangText
                        className='fs-3 text-center'
                        en={
                            <Button 
                            onMouseEnter={()=>learnMoreAnimIn()} 
                            onMouseLeave={()=>learnMoreAnimOut()} 
                            variant='white' 
                            className='learn-more-btn d-flex mx-auto'>
                                <span className='fw-bold fs-4'>Learn more</span>
                                <span className='mx-2 lm-btn-darrow'/>
                            </Button>
                        }

                        pt={
                            <Button 
                            onMouseEnter={()=>learnMoreAnimIn()} 
                            onMouseLeave={()=>learnMoreAnimOut()} 
                            variant='white' 
                            className='learn-more-btn d-flex mx-auto'>
                                <span className='fw-bold fs-4'>Veja mais</span>
                                <span className='mx-2 lm-btn-darrow'/>
                            </Button>
                        }
                        />
                    </Row>
                </div>
            </Col>
        </Row>
        </>
        
    );
}

export default Intro;
