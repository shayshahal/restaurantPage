export default function loadTab(tab)
{
    // Tab attributes
    tab.id = "tab3";
    tab.classList.add('tab');

    // Create Welcome message!
    const welcome = document.createElement('div');
    welcome.textContent = 'lol';
    tab.appendChild(welcome);
}