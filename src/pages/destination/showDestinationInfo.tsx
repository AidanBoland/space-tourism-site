export function showDestinationInfo(destinationSelection: string, destinationSelectionButton: string, destinationSelectedUnderline: string) {
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
