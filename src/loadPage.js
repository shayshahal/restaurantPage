import logo from './assets/logo.png';
import gitLogo from './assets/github-logo.png';
import callTabLoad from './loadTab.js';
import scroll from './assets/scroll.png';

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
    
    const scrollDiv = document.createElement("div");
    const img = new Image();
    img.src = scroll;
    scrollDiv.appendChild(img);
    scrollDiv.id = 'scroll-div';
    contentDiv.appendChild(scrollDiv);
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
    headerDiv.appendChild(resLogo);
}

// Main creation function
function createMain()
{
    // Create main div
    let mainDiv = document.createElement('div');
    mainDiv.id = 'main-container';
    contentDiv.appendChild(mainDiv);


    // Load tab when call is fulfilled, add it
    callTabLoad(1).then((tab) => 
    {
        mainDiv.appendChild(tab);
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
    gitLink.appendChild(gitImg);

}

