import bg from './assets/pizza3.jpg';

export default function loadTab(tab)
{
     // Create blur for background
     content.style.backgroundImage = `url(${bg})`;
     const main = document.getElementById("main-container");
     main.style.backdropFilter = 'blur(7px)';

     // Tab attributes
     tab.id = "tab3";
     tab.classList.add('tab');
 
     const hoursDiv = document.createElement('div');
     hoursDiv.id = 'hours-div';
     tab.appendChild(hoursDiv);

     const hoursTitle = document.createElement('div');
     hoursTitle.textContent = "Opening hours";
     hoursDiv.appendChild(hoursTitle);

     const hoursText = document.createElement('p');
     hoursText.textContent = 'Sunday - Thursday: 8:00 - 17:00\nFriday: 8:00 - 13:00';
     hoursTitle.appendChild(hoursText);

     const contactDiv = document.createElement('div');
     contactDiv.id = 'contact-div';
     tab.appendChild(contactDiv);

     const contactTitle = document.createElement('div');
     contactTitle.textContent = "Opening hours";
     contactDiv.appendChild(contactTitle);

     
}