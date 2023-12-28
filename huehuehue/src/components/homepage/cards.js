import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "./cards.css";
import gold from '../images/netflix.webp'
import silver from '../images/amazon-prime.webp'
import diamond from '../images/hotstar.png'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const cards = () => {
    return (
      <Container>
        <h2 className='text-center' style={{color:'green'}}> View OTT Plans</h2>
        <Row  md={3} className="g-4 p-3">
        <Col>
        <Link to='/netflix'>
          <Card>
            <Card.Img variant="top" src={gold} style={{height:'12rem'}}/>
          </Card></Link>
        </Col>
        <Col>
        <Link to='/amazon'>
          <Card>
            {/* <Card.Img variant="top" src={silver} style={{height:'12rem'}}/>
             */}
             <Card.Img variant="top" src={silver} style={{ height: '12rem', objectFit: 'cover' }} />

          </Card></Link>
        </Col>
        <Col>
        <Link to='/hotstar'>
          <Card>
            <Card.Img variant="top" src={diamond} style={{height:'12rem',  objectFit: 'cover' }}/>
          </Card>
          </Link>
        </Col>
    </Row>
                <div className='moreOptions py-2'>
                    <a href='/plans'>
                    <ArrowCircleRightIcon sx={{ fontSize: 60 }} />
                    </a>
                </div>
                </Container>
       
    )
}

export default cards
