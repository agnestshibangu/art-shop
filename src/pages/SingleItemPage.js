import React, { useState }  from 'react';
import { useParams, Link } from 'react-router-dom';
import items from '../Components/data';


export default function SingleItemPage() {


    const { id } = useParams();
    console.log(items)
    const singleItem = items.filter((item) => item.id == id)
    console.log(singleItem[0])
    const title = singleItem[0].title
    const description = singleItem[0].desc
    const price = singleItem[0].price

    return <div>
        <h1>Signle page {id}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>


        


    </div>;
}
