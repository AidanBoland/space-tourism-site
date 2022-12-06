import React from 'react';
import './destination.scss';
import { showDestinationInfo } from './showDestinationInfo';

function DestinationNav() {
    return (
        <div className='destinationNavBar'>
            <button onClick={() => showDestinationInfo('moonInfoPanel', 'moonButton', 'moonUnderline')}>
                <div>
                    <div>
                        <div>
                            <p className='navText navTextColorChange' id='moonButton'>
                                MOON
                            </p>
                        </div>
                    </div>

                    <div className='box destinationNavUnderline' id='moonUnderline' />
                </div>
            </button>

            <button onClick={() => showDestinationInfo('marsInfoPanel', 'marsButton', 'marsUnderline')}>
                <div>
                    <div>
                        <div>
                            <p className='navText navTextColorChange' id='marsButton'>
                                MARS
                            </p>
                        </div>
                    </div>

                    <div className='box destinationNavUnderline' id='marsUnderline' />
                </div>
            </button>

            <button onClick={() => showDestinationInfo('europaInfoPanel', 'europaButton', 'europaUnderline')}>
                <div>
                    <div>
                        <div>
                            <p className='navText navTextColorChange' id='europaButton'>
                                EUROPA
                            </p>
                        </div>
                    </div>

                    <div className='box destinationNavUnderline' id='europaUnderline' />
                </div>
            </button>

            <button onClick={() => showDestinationInfo('titanInfoPanel', 'titanButton', 'titanUnderline')}>
                <div>
                    <div>
                        <div>
                            <p className='navText navTextColorChange' id='titanButton'>
                                TITAN
                            </p>
                        </div>
                    </div>

                    <div className='box destinationNavUnderline' id='titanUnderline' />
                </div>
            </button>
        </div>
    );
}

export default DestinationNav;
