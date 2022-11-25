import bg from './assets/Baratie.jpg';

export default function loadTab(tab)
{
    // Change background for tab
    const main = document.getElementById("main-container");
    main.style.backgroundImage = bg;

    // Tab attributes
    tab.id = "tab3";
    tab.classList.add('tab');

    // Create Welcome message!
    const welcome = document.createElement('h1');
    welcome.textContent = 'lol';
    tab.appendChild(welcome);
}