import bg from './assets/Baratie.jpg';

export default function loadTab(tab)
{
    // Change background for tab
    const main = document.getElementById("main-container");
    main.style.backgroundImage = bg;

    // Tab attributes
    tab.id = "tab2";
    tab.classList.add('tab');

    // Create Welcome message!
    const welcome = document.createElement('h1');
    welcome.textContent = 'haha';
    tab.appendChild(welcome);

}