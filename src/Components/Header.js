import React, { useState } from "react";
import '../style/header.scss'
import { BsSearch } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { Link } from "react-router-dom";

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className="header-container">

            <div className="header-top-animation">
                <div className="header-bar">
                    ❤🔥 ONLY THIS MONTH 🔥❤ prints A4 for 15€ (value 36€) and Prints A5 for 10€ (value 14€) 🎄HAPPY HOLIDAY!🎄
                </div>

                <div className="header-navbar">
                    <div className="navbar-artist-name">jessica woods</div>
                    <div className="navbar-buttons">
                        <BsSearch className="navbar-buttons-icon " />
                        <BsHandbag className="navbar-buttons-icon" />
                        <div className="open-close-box" onClick={toggleOpenMenu}>
                            {openMenu ? <GrClose className="navbar-buttons-icon close-icon" /> :
                                <BiMenu className="navbar-buttons-icon hamburger-icon" />}
                        </div>
                    </div>

                </div>
            </div>

            <div className="navbar-header-bar" />

            <div className={openMenu ? "menu" : "menu display-none"}>
                <Link to="/" className="link-menu">Home page</Link>
                <Link to="/catalogue" className="link-menu">Catalogue</Link>
            </div>

            <div className="menu-laptop">
                <Link to="/" className="link-menu">Home page</Link>
                <Link to="/catalogue" className="link-menu">Catalogue</Link>

            </div>



        </div>
    )
}
