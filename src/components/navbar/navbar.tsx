import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
    return (
        <nav id="navMenu">
            <ul>
                <li>
                    <Link to="/" id="navlinkToHome">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="/destination" id="navlinkToDestination">
                        DESTINATION
                    </Link>
                </li>
                <li>
                    <Link to="/crew" id="navlinkToCrew">
                        CREW
                    </Link>
                </li>
                <li>
                    <Link to="/technology" id="navlinkToTechnology">
                        TECHNOLOGY
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
