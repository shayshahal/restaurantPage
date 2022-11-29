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
     hoursDiv.classList.add('tab3-div');
     tab.appendChild(hoursDiv);

     const hoursTitle = document.createElement('p');
     hoursTitle.textContent = "Opening hours:";
     hoursTitle.classList.add('title');
     hoursDiv.appendChild(hoursTitle);

     const hoursText = document.createElement('p');
     hoursText.textContent = 'Sunday - Thursday: 8:00 - 17:00\nFriday: 8:00 - 13:00';
     hoursText.classList.add('text');
     hoursDiv.appendChild(hoursText);

     const contactDiv = document.createElement('div');
     contactDiv.classList.add('tab3-div');
     tab.appendChild(contactDiv);

     const contactTitle = document.createElement('p');
     contactTitle.textContent = "Call us:";
     contactTitle.classList.add('title');
     contactDiv.appendChild(contactTitle);

     const contactText = document.createElement('p');
     contactText.textContent = 'Papa: 123-34556789\nMama: 987-65432101';
     contactText.classList.add('text');
     contactDiv.appendChild(contactText);
}