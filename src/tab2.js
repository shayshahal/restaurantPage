export default function loadTab(tab)
{
    // Tab attributes
    tab.id = "tab2";
    tab.classList.add('tab');

    // Create Welcome message!
    const welcome = document.createElement('div');
    welcome.textContent = 'hahaaaaaaaaaaaaa';
    tab.appendChild(welcome);

}