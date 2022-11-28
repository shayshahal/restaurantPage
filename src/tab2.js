import bg from './assets/Pizza.jpg';
import italian from './assets/italian.jpg';

export default function loadTab(tab)
{
    // Change background for tab
    const content = document.getElementById("content");
    content.style.backgroundImage = `url(${bg})`;

    // Create blur for background
    const main = document.getElementById("main-container");
    main.style.backdropFilter = 'blur(7px)';

    // Tab attributes
    tab.id = "tab2";
    tab.classList.add('tab');

    // Create Menu message!
    const title = document.createElement('p');
    title.textContent = 'Menu:';
    title.id = 'menu';
    tab.appendChild(title);

    const list = document.createElement('div');
    list.classList.add("menu-list");
    tab.appendChild(list);

    addItem(list, italian, "Italian", "An italiano pizza");
    addItem(list, italian, "Italian", "An italiano pizza");
    addItem(list, italian, "Italian", "An italiano pizza");
}

function addItem(list, imageSrc, title, text)
{
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");
    list.appendChild(menuItem);

    const itemImgDiv = document.createElement('div');
    itemImgDiv.classList.add("item-image-div");
    menuItem.appendChild(itemImgDiv);

    const itemImg = new Image();
    itemImg.src = imageSrc;
    itemImgDiv.appendChild(itemImg);

    const wordsDiv = document.createElement("div");
    wordsDiv.classList.add('item-words');
    menuItem.appendChild(wordsDiv);

    const name = document.createElement("p");
    name.textContent = title + ":";
    name.classList.add('item-name');
    wordsDiv.appendChild(name);

    const desc = document.createElement("p");
    desc.textContent = text;
    desc.classList.add('item-desc');
    wordsDiv.appendChild(desc);
}