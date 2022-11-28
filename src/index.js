import './style.css';
import load from './loadPage.js'
import loadTab from './loadTab.js';

// Tab tracker
let currentTab = 1;

// Call for page load
load();

// Add event listener
document.addEventListener('wheel', (e) =>
{
    console.log(e.deltaY);
    if(e.deltaY > 0 && currentTab !== 3)
    {
        currentTab += 1;
        loadTab(currentTab).then((tab) => switchTab(tab));
    }
    else if(e.deltaY < 0 && currentTab !== 1)
    {

        currentTab -= 1;
        loadTab(currentTab).then((tab) => switchTab(tab));
    }
})


// Switches current tab with the parameter given
function switchTab(tab)
{
    const main = document.getElementById("main-container");
    let oldTab = main.childNodes[0];
    oldTab.replaceWith(tab);
}