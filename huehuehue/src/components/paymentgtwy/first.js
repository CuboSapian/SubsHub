import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios"


const first = () => {
    const checkoutHandler=async(amount)=>{
        const { data: { key } } = await axios.get("http://www.localhost:4000/payment/getkey")
        const {data:{order}}=await axios.post("http://localhost:4000/payment/checkout",{
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
        callback_url: "http://localhost:4000/payment/paymentverification",
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

  return (
    <>
    <Box>
        <Stack h={"100vh"} justifyContent="center" direction={["column","row"]}>
            <Card amount={5000} img={"https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"} checkoutHandler={checkoutHandler} />
        </Stack>
    </Box>
    </>
  )
}

export default first
