import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
    return (
        <div className='topBanner'>
            <div className='logoContainer'>
                <div className='logo'></div>
            </div>

            <div className='navbarLineContainer'>
                <div className='navbarLine'></div>
            </div>

            <nav id='navMenu'>
                <div>
                    <NavLink to='/' id='homeNav' className={(navData) => (navData.isActive ? 'navlinkActive' : 'navlink')}>
                        <div>
                            <div>
                                <p className='navNumber'>00</p>
                                <p className='navText'>HOME</p>
                            </div>
                        </div>

                        <div className='box' />
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/destination' id='destinationNav' className={(navData) => (navData.isActive ? 'navlinkActive' : 'navlink')}>
                        <div>
                            <div>
                                <p className='navNumber'>01</p>
                                <p className='navText'>DESTINATION</p>
                            </div>
                        </div>

                        <div className='box' />
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/crew' id='crewNav' className={(navData) => (navData.isActive ? 'navlinkActive' : 'navlink')}>
                        <div>
                            <div>
                                <p className='navNumber'>02</p>
                                <p className='navText'>CREW</p>
                            </div>
                        </div>

                        <div className='box' />
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/technology' id='techNav' className={(navData) => (navData.isActive ? 'navlinkActive' : 'navlink')}>
                        <div>
                            <div>
                                <p className='navNumber'>03</p>
                                <p className='navText'>TECHNOLOGY</p>
                            </div>
                        </div>

                        <div className='box' />
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
