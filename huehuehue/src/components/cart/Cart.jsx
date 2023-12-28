import { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from '../context/Context';
// import Rating from "./Rating";
import Header from "./Header";
// import { Link } from "react-router-dom";
import axios from "axios"

const Cart = () => {


    const checkoutHandler=async(amount)=>{
        const { data: { key } } = await axios.get("http://localhost:5000/payment/getkey")
        const {data:{order}}=await axios.post("http://localhost:5000/payment/checkout",{
            amount
        })
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "SubsHub",
            description: "Payment Gateway of SubsHub",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:5000/payment/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }


  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
    <Header/>
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                {/* <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col> */}
                <Col md={3}>
                  <span>{prod.name} days</span>
                </Col>
                <Col md={3}>₹ {prod.price}</Col>
                {/* <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col> */}
                <Col md={3}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={3}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
       
        <Button type="button" disabled={cart.length === 0}  onClick={()=>checkoutHandler(total)}>
          Proceed to Checkout
        </Button>
      
      </div>
    </div>
    </>
  );
};

export default Cart;