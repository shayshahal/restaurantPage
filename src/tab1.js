import bg from './assets/Pizza.jpg';
import logo from './assets/papa.png';

export default function loadTab(tab)
{
    // Create blur for background
    const main = document.getElementById("main-container");
    content.style.backgroundImage = `url(${bg})`;
    main.style.backdropFilter = 'blur(7px)';
    
    // Tab attributes
    tab.id = "tab1";
    tab.classList.add('tab');

    // Create Welcome message!
    const welcome = document.createElement('div');
    welcome.textContent = 'Welcome to Papa Pizza';
    welcome.id = 'welcome';
    tab.appendChild(welcome);

    const papa = document.createElement('div');
    papa.textContent = 'The Pizza of Papa';
    papa.id = 'papa';
    const img = new Image();
    img.src = logo;
    papa.appendChild(img);
    tab.appendChild(papa);
}