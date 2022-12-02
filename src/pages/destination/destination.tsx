import React from 'react';
import './destination.scss';

import DestinationNav from './destinationNav';

import Moon from './destinations/moon';
import Mars from './destinations/mars';
import Europa from './destinations/europa';
import Titan from './destinations/titan';

function Destination() {
    return (
        <div className='destinationBackground'>
            <div className='pageHeading'>
                <h5 className='pageHeadingNumber'>01</h5>
                <h5 className='pageHeadingText'>PICK YOUR DESTINATION</h5>
            </div>

            <DestinationNav />

            <div>
                <Moon />

                <Mars />

                <Europa />

                <Titan />
            </div>
        </div>
    );
}

export default Destination;
