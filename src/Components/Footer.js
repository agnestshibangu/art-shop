import React from 'react'
import '../style/footer.scss'
import { BsInstagram } from 'react-icons/bs';
import { GrAmex } from 'react-icons/gr';
import { SiVisa } from 'react-icons/si'
import { RiMastercardFill } from 'react-icons/ri'
import { RiMastercardLine } from 'react-icons/ri'
import { FaPaypal } from 'react-icons/fa'



export default function Footer() {
    return (
        <div className="footer-container">
            <BsInstagram className="footer-insta-icon" />

            <div className="footer-payments-container">
            <GrAmex className="footer-icons" />
            <SiVisa className="footer-icons" />
            <RiMastercardFill className="footer-icons" />
            <RiMastercardLine className="footer-icons" />
            <FaPaypal className="footer-icons" />
            </div>

            <p className="p-copyright">&copy; 2021 Jessica Woods</p>

        </div>
    )
}
