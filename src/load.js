import logo from './assets/logo.png';
import gitLogo from './assets/github-logo.png';

const contentDiv = document.createElement("div"); // Main content div
contentDiv.id = 'content';
document.body.appendChild(contentDiv);

export default function createPage()
{
    createHeader();
    createMain();
    createFooter();
}

function createHeader()
{
    let headerDiv = document.createElement('div');
    headerDiv.id = 'header';

    let resLogo = new Image();
    resLogo.id = 'logo';
    resLogo.src = logo; 
    resLogo.classList.add('img');
    headerDiv.appendChild(resLogo);

    contentDiv.appendChild(headerDiv);
}
function createMain()
{
    let mainDiv = document.createElement('div');
    mainDiv.id = 'main-container';

    let leftBtn = document.createElement('button');

    let tab = document.createElement('div');
    tab.classList.add('tab');

    let rightBtn = document.createElement('button');

    mainDiv.appendChild(leftBtn);
    mainDiv.appendChild(tab);
    mainDiv.appendChild(rightBtn);

    contentDiv.appendChild(mainDiv);

}

function createFooter()
{
    let footerDiv = document.createElement('div');
    footerDiv.id = 'footer';

    let credits = document.createElement('div');
    credits.id = 'credits';
    let creditsText = document.createElement('p');
    creditsText.textContent = '© Shay Shahal 2022'
    credits.appendChild(creditsText);

    let gitLink = document.createElement('a');
    gitLink.id = 'github-link';
    gitLink.href = 'https://github.com/shayshahal/restaurantPage';
    let gitImg = document.createElement('img')
    gitImg.src = gitLogo;
    gitImg.alt = 'github image';
    gitImg.classList.add('img');
    gitLink.appendChild(gitImg);

    footerDiv.appendChild(credits);
    footerDiv.appendChild(gitLink);

    contentDiv.appendChild(footerDiv);
}