import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Sec1 = () => {
  return (
    // <div style={{backgroundColor:'#d92883'}}>
    <div style={{backgroundColor:'green'}}>
     <Container>
        <h1 className='text-center py-3' style={{color:'white'}}>Manage Your Account</h1>
        <h4 className='text-center py-2' style={{color:'white'}}>Handle your account from the Mobile App and get a lot done quicker and easier!</h4>
        <Row>
            <Col className='text-center py-2' style={{color:'white'}}>
                <PhoneAndroidIcon fontSize='large'/><br/>
            <h5>Recharge</h5><br/>
            <p>
Effortlessly recharge your favorite OTT subscriptions, ensuring uninterrupted entertainment with secure transactions and streamlined billing on our user-friendly platform.!</p>
            </Col>
            <Col className='text-center py-2' style={{color:'white'}}>
            <AccountBalanceOutlinedIcon fontSize='large'/><br/>
            <h5>Account Summary</h5><br/>
            <p>View a concise account summary, track subscription details, and manage payments seamlessly for your favorite OTT platforms, enhancing your user experience.</p>
            </Col>
            <Col className='text-center py-2' style={{color:'white'}}>
            <ReviewsIcon fontSize='large'/><br/>
            <h5>Recommendation</h5><br/>
            <p>Discover personalized content recommendations, tailored to your preferences, optimizing your OTT experience with curated suggestions on our intuitive platform.</p>
            </Col>
            <Col className='text-center py-2' style={{color:'white'}}>
            <WifiOutlinedIcon fontSize='large'/><br/>
            <h5>Wifi Remote</h5><br/>
            <p>Control your OTT experience wirelessly with the WiFi Remote feature, simplifying navigation and enhancing accessibility on our innovative recharge platform.</p>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default Sec1
