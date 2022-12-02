import React from 'react';
import { useState } from 'react';
import './destination.scss';

function DestinationNav() {
    const [showMoon, setShowMoon] = useState(true);
    const [showEuropa, setShowEuropa] = useState(false);
    return (
        <div className='destinationNavBar'>
            <button>
                <div>
                    <div>
                        <p className='navText'>MOON</p>
                    </div>
                </div>
            </button>

            <button>
                <div>
                    <div>
                        <p className='navText'>MARS</p>
                    </div>
                </div>
            </button>

            <button>
                <div>
                    <div>
                        <p className='navText'>EUROPA</p>
                    </div>
                </div>
            </button>

            <button>
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
