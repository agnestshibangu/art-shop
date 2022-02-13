import React, { useState } from 'react';
import '../style/catalogue.scss';
import collectionsItems from '../Components/collectionsItemsData';
import { Link } from "react-router-dom";


const HomeButtons = ({ }) => {

    function ReadMore() {
        const [readMore, setReadMore] = useState(false)

        function toggleSetReadMore() {
            setReadMore(!readMore)
        }
        
        return (
            <p className='showmore' onClick={toggleSetReadMore} className={readMore ? "collection-item active" : "collection-item" }>HIIIIII</p>
        )
    }



    

    return <div>
            {collectionsItems.map((collectionItem) => {
                        const { id, category, img } = collectionItem;
                        return <article key={id} >
                            <img className="item-img" src={img} alt='' />
                            <ReadMore/>
                            <Link to={`/${category}`} className="item-title">{category}</Link>
                        </article>
                    })}
    </div>
}


export default HomeButtons;