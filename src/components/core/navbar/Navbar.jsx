import { List, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handelClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Hello Travel
                    </Link>
                    <div className="menu-icon" onClick={handelClick}>

                        {click ? <X size={32} /> : <List size={32} />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/adventur" className="nav-links" onClick={closeMobileMenu}>
                                Adventur

                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/travel" className="nav-links" onClick={closeMobileMenu}>
                                Travel Details
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;