const instance = require('../instance.js')
const crypto= require("crypto")

const checkout = async (req, res) => {

    const options = {
        amount: Number(req.body.amount*100),
        currency: "INR"
    };
    // console.log(instance)
    const order = await instance.orders.create(options).catch(error => console.log(error));
    res.status(200).json({
        success: true,
        order
    });

}

const paymentVerification = async (req, res) => {
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body;

    const body=razorpay_order_id+ '|' + razorpay_payment_id;

    const expectedSign=crypto.createHmac('sha256' , process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');
    console.log("sig recieved " , razorpay_signature)
    console.log("sig generated " , expectedSign)

    const isAuthentic = razorpay_signature===expectedSign;
    
    
    if(isAuthentic)
    {
        res.redirect(
            `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        )
    }
    else
    {
        res.status(400).json({
            success: false,
        });
    }

}

module.exports = {checkout , paymentVerification}