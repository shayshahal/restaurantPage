import bg from './assets/Baratie.jpg';

export default function loadTab(tab)
{
    // Change background for tab
    const content = document.getElementById("content");
    content.style.backgroundImage = `url(${bg})`;

    // Create blur for background
    const main = document.getElementById("main-container");
    main.style.backdropFilter = 'blur(3px)';
    
    // Tab attributes
    tab.id = "tab1";
    tab.classList.add('tab');



    // Create Welcome message!
    const welcome = document.createElement('h1');
    welcome.textContent = 'Welcome to Baratie';
    tab.appendChild(welcome);
}