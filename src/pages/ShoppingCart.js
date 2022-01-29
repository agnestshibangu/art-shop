import React from 'react';
import { CartState } from '../context/Context';
import { Container, Row, Col } from "react-bootstrap";

export default function ShoppingCart() {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    console.log(cart)

    return (
        <div>
            <h1>Shopping Cart</h1>
            <Container>
                <Row >
                    {cart.map((cartItem) => {
                        const { id, title, price, img, desc } = cartItem;
                        return <Col sm={12} md={6} lg={3} key={id} className="menu-item col-md-offset-2">
                            <img className="img-product" src={img} />
                            <div className="item-title-and-price">
                                <span className="item-price">${price}</span>
                            </div>
                            <p className="item-description">{desc}</p>
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload: cartItem,
                                    })
                                }}>REMOVE</button>
                        </Col>
                    })}
                </Row>
            </Container>
        </div>
    )
}
