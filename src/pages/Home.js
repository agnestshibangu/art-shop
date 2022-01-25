import React from 'react'
import '../style/home.scss'
import collectionsItems from '../Components/collectionsItemsData';
import Image1 from '../Components/images/paradise-flower.jpg'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">

            <div className="header-container">
                <img src={Image1} alt="" className="header-container-image" />
                <h2 className="header-container-image-title1">Prints, stickers and mugs</h2>
                <h3 className="header-container-image-title2">Created with love by illustrator Jessica Woods</h3> 
            </div>



            <div className="collections-container">

                <h2 className="collections-title">Collections list</h2>

                <div className="collections-grid">

                    {collectionsItems.map((collectionItem) => {
                        const { id, category, img } = collectionItem;
                        return <article key={id} className="collection-item">
                            <img className="item-img" src={img} alt='' />
                            <Link to={`/${category}`} className="item-title">{category}</Link>
                        </article>
                    })}
                </div>


            </div>

            <div className="navbar-header-bar" />
        </div>




    )
}