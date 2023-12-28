import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

const faqs = () => {
    return (
        <div style={{backgroundColor:'rgb(242, 240, 244)'}}>
        <Container className='py-3' style={{backgroundColor:'#f2f0f4'}}>
            <h2 className='text-center' >Want to Know More?</h2>
        <div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" style={{backgroundColor:'lightgreen'}}>
                    <Accordion.Header>Is there a section for netflix plans and services? </Accordion.Header>
                    <Accordion.Body>
                        Yes!! There is a card on the home page that will redirect to all netflix plans. Alternatively, you can find netflix plans in Plans section in Navigation Bar.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{backgroundColor:'lightgreen'}}>
                    <Accordion.Header>Are  there currently any discounts on plans of OTT platforms?</Accordion.Header>
                    <Accordion.Body>
                        We are sorry to inform that there are currently no discount on plans of any OTT platform. All the prices are same as they are on the platform's plans. But here you can manage your subscription of all platforms in a single place in an organized manner.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={{backgroundColor:'lightgreen'}}>
                    <Accordion.Header> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt error magni et tempora laborum pariatur quo, fugit quidem illo, officia deleniti totam eum nobis sed ipsam. Accusantium cupiditate sapiente ab earum iure nesciunt mollitia ea dolor, animi quaerat in magni quos facilis deserunt voluptatibus nobis ullam obcaecati architecto itaque et soluta praesentium magnam similique pariatur. Repellendus recusandae corporis labore nostrum culpa, odit ullam tempore distinctio doloribus cumque a iure similique animi placeat? Quod, at maxime! Quas aperiam modi quam deleniti quisquam. Delectus reiciendis, quam dolorem quibusdam quia recusandae ab fuga, quasi nesciunt cupiditate doloremque consectetur ut obcaecati totam sit!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" style={{backgroundColor:'lightgreen'}}>
                    <Accordion.Header> Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt error magni et tempora laborum pariatur quo, fugit quidem illo, officia deleniti totam eum nobis sed ipsam. Accusantium cupiditate sapiente ab earum iure nesciunt mollitia ea dolor, animi quaerat in magni quos facilis deserunt voluptatibus nobis ullam obcaecati architecto itaque et soluta praesentium magnam similique pariatur. Repellendus recusandae corporis labore nostrum culpa, odit ullam tempore distinctio doloribus cumque a iure similique animi placeat? Quod, at maxime! Quas aperiam modi quam deleniti quisquam. Delectus reiciendis, quam dolorem quibusdam quia recusandae ab fuga, quasi nesciunt cupiditate doloremque consectetur ut obcaecati totam sit!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" style={{backgroundColor:'lightgreen'}}>
                    <Accordion.Header> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt error magni et tempora laborum pariatur quo, fugit quidem illo, officia deleniti totam eum nobis sed ipsam. Accusantium cupiditate sapiente ab earum iure nesciunt mollitia ea dolor, animi quaerat in magni quos facilis deserunt voluptatibus nobis ullam obcaecati architecto itaque et soluta praesentium magnam similique pariatur. Repellendus recusandae corporis labore nostrum culpa, odit ullam tempore distinctio doloribus cumque a iure similique animi placeat? Quod, at maxime! Quas aperiam modi quam deleniti quisquam. Delectus reiciendis, quam dolorem quibusdam quia recusandae ab fuga, quasi nesciunt cupiditate doloremque consectetur ut obcaecati totam sit!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        </Container>
        </div>
    )
}

export default faqs
