import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import MLP from '../images/MLP.jpg'
import OTTpink from '../images/corousalpic.jpg'
const corousal = () => {
    return (
        <>
                <Carousel className='h-50' >
                    <Carousel.Item interval={1000}>
                        {/* <img className="d-block w-100" src="https://theenvoyweb.com/wp-content/uploads/2020/09/OTT.jpg" alt="..." /> */}
                        <img className="d-block w-100" src={OTTpink} alt="..." style={{  maxHeight: '100%', maxWidth: '100%', display:'flex' }}/>
                        <Carousel.Caption>
                            <h4>All in One Platform </h4>
                            {/* <p> You Have it All here</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        {/* <img className="d-block h-50 w-100" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg" alt="..." style={{ objectFit: 'cover', maxHeight: '580px', maxWidth: '100%' }} /> */}
                        {/* <img className="d-block h-50 w-100" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg" alt="..." style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '130%' }} /> */}
                        <img className="d-block h-50 w-100" src={MLP} alt="..." style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '130%' }} />
                        <Carousel.Caption>
                            <h2>Movies & Shows</h2>
                            <h3>All your Favorite in one place</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </>
    )
}

export default corousal
