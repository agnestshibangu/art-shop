import React from 'react'
import '../style/footer.scss'
import { BsInstagram } from 'react-icons/bs'; 

export default function Footer() {
    return (
        <div className="footer-container">
            <BsInstagram className="footer-insta-icon" />
            <div className="footer-payments-container"></div>
        </div> 
    )
}
