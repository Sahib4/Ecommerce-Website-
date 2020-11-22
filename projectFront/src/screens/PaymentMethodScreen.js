import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../componenets/CheckoutSteps';

export default function PaymentMethodScreen(props) {
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address) {
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder ');

    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3> </CheckoutSteps>
            <form className = "form "  onSubmit = {submitHandler}>
                <div>
                    <h1>Payments Method</h1>
                </div>
                <div className = "pay">
                <div>
                    <input type = "radio" id = "radio" value = "paypal" name = "paymentMethod" required checked onChange={(e) => setPaymentMethod(e.target.value)}></input>
                    <label htmlFor = "paypal">Paypal</label>
                </div>
                <div>
                    <input type = "radio" id = "radio" value = "stripe" name = "paymentMethod" required checked onChange={(e) => setPaymentMethod(e.target.value)}></input>
                    <label htmlFor = "stripe">stripe</label>
                </div>
                </div>
                <div>
                    <button className = "primary" type = "submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
