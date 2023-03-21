import './style.css';
import createTabs from './init.js';
import designHomeTab from './home.js';
import designMenuTab from './menu.js';
import designContactTab from './contact.js';


const main = document.querySelector('#content');


resetAndDesignTab(designHomeTab)


window.resetAndDesignTab = resetAndDesignTab;
window.designMenuTab = designMenuTab;
window.designHomeTab = designHomeTab;
window.createElement = createElement;



function resetAndDesignTab(createTabFunction){
    main.innerHTML = '';
    createTabs();
    createTabFunction();
    const homeButton = document.querySelector('.home-tab');
    homeButton.addEventListener('click',()=>{resetAndDesignTab(designHomeTab)});

    const menuButton = document.querySelector('.menu-tab');
    menuButton.addEventListener('click',()=>{resetAndDesignTab(designMenuTab)});

    const contactButton = document.querySelector('.contact-tab');
    contactButton.addEventListener('click',()=>{resetAndDesignTab(designContactTab)});
}


export function createElement(type, classes, text){
    let element = document.createElement(type);
    if (classes.length !== 0){
        typeof(classes) === 'object' ? element.classList.add(...classes) : element.classList.add(classes);
    }
    element.textContent = text;
    return element;
}