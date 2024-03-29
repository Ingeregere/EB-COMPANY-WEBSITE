import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import './styleHero.css';

export default function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    img1,
    alt,
    imgStart
}) {
  return (
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <Container >
            <Row style={
                  {
                  display: 'flex',
                  flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                  }
            }>
                <Col md={6}>
                
              <div className='mt-5'>
                <div className='top-line'>{topLine}</div>
                    <h1 className={lightText ? 'heading' : 'heading dark'}>
                      {headline}
                    </h1>
                    <p
                      className={
                        lightTextDesc
                          ? 'home__hero-subtitle'
                          : 'home__hero-subtitle dark'
                      }
                    >
                      {description}
                    </p>
              </div>
                </Col>
                <Col md={6}>
                      <img
                        className="d-block w-100"
                        src={img1}
                        alt={alt}
                      />
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}