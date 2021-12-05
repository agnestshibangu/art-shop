import React from "react";
import '../style/header.scss'
import { BsSearch } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';

export default function header() {
    return (
        <div className="header-container">
            <div className="header-bar">
            ❤🔥 ONLY THIS MONTH 🔥❤ prints A4 for 15€ (value 36€) and Prints A5 for 10€ (value 14€) 🎄HAPPY HOLIDAY!🎄
            </div>

            <div className="header-navbar">
                <div className="navbar-artist-name">jessica woods</div>
                <div className="navbar-buttons">
                    <BsSearch className="navbar-buttons-search-icon"/>
                    <BsHandbag className="navbar-buttons-bag-icon"/>
                    <BiMenu className="navbar-buttons-menu-icon"/>
                </div>
                
            </div>

            <div className="navbar-header-bar"/>
        </div>
    )
}
