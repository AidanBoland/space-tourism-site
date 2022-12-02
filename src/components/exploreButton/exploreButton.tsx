import React from 'react';
import { NavLink } from 'react-router-dom';
import './exploreButton.scss';

function ExploreButton() {
    return (
        <NavLink to='/destination'>
            <div className='exploreButtonOuter'>
                <div className='exploreButtonInner'>
                    <h4>EXPLORE</h4>
                </div>
            </div>
        </NavLink>
    );
}

export default ExploreButton;
