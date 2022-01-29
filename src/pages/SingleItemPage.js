import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import items from '../Components/data';
import '../style/singleitempage.scss'
import { CartState } from '../context/Context';


export default function SingleItemPage() {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    console.log(cart)

    const { id } = useParams();
    const singleItem = items.filter((item) => item.id == id)
    console.log(singleItem[0])
    const product = singleItem[0]
    const title = singleItem[0].title
    const description = singleItem[0].desc
    const price = singleItem[0].price


    return <div className="container-single-item">
        <img className="container-single-item-img" src="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <button
            onClick={() => {
                dispatch({
                    type: 'ADD_TO_CART',
                    payload: product,
                })
            }}>Add to cart</button>

    </div>;  
}
