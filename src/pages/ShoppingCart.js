import React from 'react';
import { CartState } from '../context/Context';
import { Container, Row, Col } from "react-bootstrap";
import '../style/shoppingcart.scss'
import { Link } from 'react-router-dom';

export default function ShoppingCart() {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    let totalPrice = 0;
    cart.map((cartItem) => totalPrice += cartItem.price * cartItem.qty)
    console.log(totalPrice) 

    let totalQuantity = 0;
    cart.map((cartItem) => totalQuantity += cartItem.qty * 1)
    console.log(totalQuantity) 


    return (
        <div>
            <div className='shopping-cart-top-box-titles'>
                <h1 className='shopping-cart-title'>Shopping cart</h1>
                <Link to="/catalogue" className="keep-buying-link">Keep buying</Link>

            </div>
           
            
            <Container className='shopping-cart-container'>

            

                        { totalQuantity == 0 ?
                            <div className='empty-cart-container'>
                                your cart is empty ! 
                            </div>

                        : null}
            
                <Row >
                    {cart.map((cartItem) => {
                        const { id, title, price, img, desc, qty } = cartItem;
                        return <Col sm={12} md={6} lg={3} key={id} className="menu-item col-md-offset-2">
                            <img className="img-product" src={img} />
                            <div className="item-title-and-price">
                                <span className="item-price">${price}</span>
                            </div>
                            <h3 className="item-title">{title}</h3>
                            <button className="remove-button"
                                onClick={() => {
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload: cartItem,
                                    })
                                }}>REMOVE</button>

                            <input className="input" type="number" id="quantity" defaultValue={qty} name="quantity" min="1" max="5"
                                onChange={(e) =>
                                    dispatch({
                                        type: "CHANGE_CART_QTY",
                                        payload: {
                                            id: cartItem.id,
                                            qty: e.target.value
                                        }
                                    })
                                }
                            />
                        </Col>
                    })}
                </Row>
            </Container>

            <div className="total-container">    
                <div className="total-bar"/>
                <div className="total-container-box">
                    <div className='total-box'>
                        <p className="total-amount-p">Subtotal </p>
                        <p className="total-amount-digit">${totalPrice}USD</p>
                    </div>
                
                
                    { totalQuantity == 0 ?
                           null : 
                           <Link className="finish-order-button" to="/ordervalidation">
                                <button className="finish-order-inner-button">FINISH ORDER</button>
                           </Link>
                        }


                   
                </div>          
            </div>
        </div>
    )
}
