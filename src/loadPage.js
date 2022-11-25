import logo from './assets/logo.png';
import gitLogo from './assets/github-logo.png';
import callTabLoad from './loadTab.js';

// Create content div
const contentDiv = document.createElement("div"); 
contentDiv.id = 'content';
document.body.appendChild(contentDiv);

// Page load function that will be imported in the main JS file
export default function loadPage()
{
    createHeader(); // Header creation
    createMain(); // Main creation
    createFooter(); // Footer creation
}

// Header creation function 
function createHeader()
{
    // Create header div
    let headerDiv = document.createElement('div');
    headerDiv.id = 'header';
    contentDiv.appendChild(headerDiv);

    // Create the logo
    let resLogo = new Image();
    resLogo.id = 'logo';
    resLogo.src = logo; 
    resLogo.classList.add('img');
    headerDiv.appendChild(resLogo);
}

// Main creation function
function createMain()
{
    // Create main div
    let mainDiv = document.createElement('div');
    mainDiv.id = 'main-container';
    contentDiv.appendChild(mainDiv);

    // Create left button, disable him as we start with the tab farthest to the left
    let leftBtn = document.createElement('button');
    leftBtn.textContent = "<";
    leftBtn.disabled = true;
    leftBtn.id = "leftBtn";
    leftBtn.classList.add('nav-btn');
    mainDiv.appendChild(leftBtn);   

    // Create right button
    let rightBtn = document.createElement('button');
    rightBtn.textContent = ">";
    rightBtn.id = "rightBtn";
    rightBtn.classList.add('nav-btn');
    mainDiv.appendChild(rightBtn);

    // Load tab when call is fulfilled, add it in the middle
    callTabLoad(1).then((tab) => 
    {
        mainDiv.insertBefore(tab, rightBtn);
    });
}

// Footer creation function
function createFooter()
{
    // Create footer div
    let footerDiv = document.createElement('div');
    footerDiv.id = 'footer';
    contentDiv.appendChild(footerDiv);

    // Create credits div 
    let credits = document.createElement('div');
    credits.id = 'credits';
    footerDiv.appendChild(credits);
    
    // Create text  
    let creditsText = document.createElement('p');
    creditsText.textContent = '© Shay Shahal 2022'
    credits.appendChild(creditsText);

    // Create link 
    let gitLink = document.createElement('a');
    gitLink.id = 'github-link';
    gitLink.href = 'https://github.com/shayshahal/restaurantPage';
    gitLink.target = 'blank'; // Go to new tab
    footerDiv.appendChild(gitLink);

    // Create image
    let gitImg = document.createElement('img')
    gitImg.src = gitLogo;
    gitImg.alt = 'github image';
    gitImg.classList.add('img');
    gitLink.appendChild(gitImg);

}

