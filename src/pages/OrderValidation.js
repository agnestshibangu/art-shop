import React from 'react';
import { CartState } from '../context/Context';
import { Container, Row, Col } from "react-bootstrap";
import '../style/ordervalidation.scss'


export default function OrderValidation() {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    console.log(cart)

    let totalPrice = 0;
    cart.map((cartItem) => totalPrice += cartItem.price * cartItem.qty)
    console.log(totalPrice) 


    return <div>
        <h1 className='order-validation-title'>Order validation</h1>

        <div className="validation-two-parts-container">
            <form className="customer-form">
                    <input className="form-input" type="text" name="email" placeholder='email'/>
                    <div className="first-last-name-box">
                    <input className="form-input input-name" type="text" name="firstName" placeholder="first name"/>
                    <input className="form-input input-name"  type="text" name="lastName" placeholder="last name" />
                    </div>
                    <input className="form-input" type="text" name="address" placeholder="address"/>
                    <input className="form-input" type="text" name="city" placeholder="city"/>
                    <input className="form-input" type="text" name="postal code" placeholder="postal code"/>

                <input className="form-submit-button" type="submit" value="Envoyer" />
            </form>

            <div className="validation-bar"/>

            <div className="order-recap-section">
                <Container>
                        {cart.map((menuItem) => {
                            const { id, title, price, img, desc } = menuItem;                    
                            return <div key={id} className="menu-item-validation">
                                <img className="img-product-validation" src={img} />
                                <div className="item-title-and-price-validation">
                                    <span className="item-price-validation">${price}</span>
                                    <p className="item-description">{title}</p>
                                </div>
                               
                                </div>
                        })}
                </Container>
                <div className="total-amount-box-validation">
                    <p className="total-amount-digit-validation">${totalPrice}USD</p>
                </div>
            </div>
        
          

        </div>

    </div>;
}
