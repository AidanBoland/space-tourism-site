import React from 'react';
import './destination.scss';

function showDestinationInfo(destinationSelection: string, destinationSelectionButton: string, destinationSelectedUnderline: string) {
    //get the selected element and set it's opacity to 1
    let selectedPanel = document.getElementById(destinationSelection);
    selectedPanel?.setAttribute('style', 'opacity: 1;');

    //get all other elements and set their opacity to 0
    let allPanels = document.getElementsByClassName('destinationInfoPanel');
    for (let i = 0; i < allPanels.length; i++) {
        if (allPanels[i] !== selectedPanel) {
            allPanels[i].setAttribute('style', 'opacity: 0;');
        }
    }

    //get the selected button and set it's color to white
    let selectedButton = document.getElementById(destinationSelectionButton);
    selectedButton?.setAttribute('style', 'color: #FFFFFF;');

    //get all other buttons and set their colour to accent
    let allButtons = document.getElementsByClassName('navTextColorChange');
    for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i] !== selectedButton) {
            allButtons[i].setAttribute('style', 'color: $accentBlue');
        }
    }

    //get underline of selected button and set it's opacity to 1
    let selectedUnderline = document.getElementById(destinationSelectedUnderline);
    selectedUnderline?.classList.add('selectedBox');
    selectedUnderline?.classList.remove('box');

    let allUnderlines = document.getElementsByClassName('destinationNavUnderline');
    for (let i = 0; i < allUnderlines.length; i++) {
        if (allUnderlines[i] !== selectedUnderline) {
            allUnderlines[i].classList.add('box');
            allUnderlines[i].classList.remove('selectedBox');
        }
    }
}

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
