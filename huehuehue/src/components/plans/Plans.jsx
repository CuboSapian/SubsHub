import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import gold from '../images/netflix.webp'
import silver from '../images/amazon-prime.webp'
import zee5 from '../images/zee5.jpg'
import sony from '../images/sony-liv.jpeg'
import hotstar from '../images/hotstar.png'
import hbo from '../images/hbo.jpg'
import alt from '../images/alt.webp'
import voot from '../images/voot.webp'
import apple from '../images/apple-tv.png'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../homepage/navbar';
import Footer from '../homepage/footer'
// import { Flex } from '@chakra-ui/react';

const Plans = () => {
  return (
    <>
    <Navbar/>
    <Container className='mt-5'>
     <Row  md={3} className="g-4 p-3">
        <Col>
        <Link to='/netflix'>
          <Card >
            {/* <Card.Img variant="top" src={gold} style={{height:'12rem'}}/> */}
            <Card.Img variant="top" src={gold} style={{ objectFit: 'cover', width: '100%', height: '12rem',  }}/>
          </Card></Link>
        </Col>
        <Col>
        <Link to='/amazon'>
          <Card>
            {/* <Card.Img variant="top" src={silver} style={{height:'12rem'}}/> */}
            <Card.Img variant="top" src={silver} style={{ objectFit: 'cover', width: '100%', height: '12rem',  }}/>
          </Card></Link>
        </Col>
        <Col>
        <Link to='/netflix'>
          <Card>
            {/* <Card.Img variant="top" src={zee5} style={{height:'12rem'}}/> */}
            <Card.Img variant="top" src={zee5} style={{ objectFit: 'cover', width: '100%', height: '12rem',  }}/>
          </Card>
          </Link>
        </Col>
    </Row>
    <Row  md={3} className="g-4 p-3">
        <Col>
          <Card>
            {/* <Card.Img variant="top" src={sony} style={{height:'12rem'}}/> */}
            <Card.Img variant="top" src={sony} style={{ objectFit: 'cover', width: '100%', height: '12rem',  }}/>
          </Card>
        </Col>
        <Col>
        <Link to='/hotstar'>
          <Card>
            {/* <Card.Img variant="top" src={hotstar} style={{height:'12rem'}}/> */}
            <Card.Img variant="top" src={hotstar} style={{ objectFit: 'cover', width: '100%', height: '12rem',  }}/>
          </Card></Link>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant="top" src={hbo} style={{height:'12rem'}}/> */}
            <Card.Img variant="top" src={hbo} style={{ objectFit: 'cover', width: '100%', height: '12rem',  }}/>
          </Card>
        </Col>
    </Row>
    <Row  md={3} className="g-4 p-3">
        <Col>
          <Card>
            {/* <Card.Img variant="top" src={alt} style={{height:'12rem'}}/> */}
            <Card.Img variant="top" src={alt} style={{ objectFit: 'cover', width:'100%' ,height: '12rem',  }}/>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant="top" src={voot} style={{height:'12rem'}}/> */}
            <Card.Img variant="top" src={voot} style={{ objectFit: 'cover', width: '100%', height: '12rem',  }}/>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant="top" src={apple} style={{height:'12rem'}} /> */}
            <Card.Img variant="top" src={apple} style={{ objectFit: 'cover', width: '100%', height: '12rem',  }}/>
          </Card>
        </Col>
        
    </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default Plans