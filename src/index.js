import './style.css';
import load from './loadPage.js'
import loadTab from './loadTab.js';

// Tab tracker
let currentTab = 1;

// Call for page load
load();

// Add event listeners to buttons
const leftBtn = document.getElementById("leftBtn");
leftBtn.addEventListener("click", switchTabLeft);
const rightBtn = document.getElementById("rightBtn");
rightBtn.addEventListener("click", switchTabRight);

// On click for left button
function switchTabLeft()
{
    //Update tab tracker
    currentTab -= 1;

    // Disable/Enable buttons that shouldn't/should work
    if(currentTab === 1)
        leftBtn.disabled = true;
    if(currentTab === 2)
        rightBtn.disabled = false;    

    // Call for tab load
    loadTab(currentTab).then((tab)=>switchTab(tab));
}

// On click for right button
function switchTabRight()
{
    //Update tab tracker
    currentTab += 1;

    // Disable/Enable buttons that should/shouldn't work
    if(currentTab === 3)
        rightBtn.disabled = true;
    if(currentTab === 2)
        leftBtn.disabled = false;    
    
    // Call for tab load
    loadTab(currentTab).then((tab)=>switchTab(tab));
}

// Switches current tab with the parameter given
function switchTab(tab)
{
    const main = document.getElementById("main-container");
    main.replaceChild(tab, main.childNodes[1]);
}