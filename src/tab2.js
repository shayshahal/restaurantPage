import bg from './assets/pizza2.jpg';
import italian from './assets/italian.jpg';
import ny from './assets/new-yorker2.jpg';
import mx from './assets/mex.jpg';

export default function loadTab(tab)
{
    // Create blur for background
    content.style.backgroundImage = `url(${bg})`;
    const main = document.getElementById("main-container");
    main.style.backdropFilter = 'blur(7px) brightness(85%)';

    // Tab attributes
    tab.id = "tab2";
    tab.classList.add('tab');

    const list = document.createElement('div');
    list.classList.add("menu-list");
    tab.appendChild(list);

    // Create Menu title!
    const title = document.createElement('p');
    title.textContent = 'Menu:';
    title.classList.add('title');
    list.appendChild(title);

    addItem(list, italian, "Italian:", "An italiano pizza", 10);
    addItem(list, mx, "Mexican:", "A Mexicano pizza", 20);
    addItem(list, ny, "New-Yorker:", "A New-Yorker pizza", 30);
}

function addItem(list, imageSrc, title, text, prc)
{
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");
    list.appendChild(menuItem);

    const itemImgDiv = document.createElement('div');
    itemImgDiv.classList.add("item-image-div");
    menuItem.appendChild(itemImgDiv);

    itemImgDiv.style.backgroundImage = `url(${imageSrc})`;

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

    const price = document.createElement("p");
    price.textContent = prc + "$";
    price.classList.add('item-price');
    wordsDiv.appendChild(price);
}