import React from 'react';
import './destination.scss';

function showDestinationInfo(destinationSelection: string) {
    let selectedPanel = document.getElementById(destinationSelection);
    selectedPanel?.setAttribute('style', 'opacity: 1;');
    let allPanels = document.getElementsByClassName('destinationNavBar');
}

function DestinationNav() {
    return (
        <div className='destinationNavBar'>
            <button onClick={() => showDestinationInfo('moonInfoPanel')}>
                <div>
                    <div>
                        <p className='navText'>MOON</p>
                    </div>
                </div>
            </button>

            <button onClick={() => showDestinationInfo('marsInfoPanel')}>
                <div>
                    <div>
                        <p className='navText'>MARS</p>
                    </div>
                </div>
            </button>

            <button onClick={() => showDestinationInfo('europaInfoPanel')}>
                <div>
                    <div>
                        <p className='navText'>EUROPA</p>
                    </div>
                </div>
            </button>

            <button onClick={() => showDestinationInfo('titanInfoPanel')}>
                <div>
                    <div>
                        <p className='navText'>TITAN</p>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default DestinationNav;
