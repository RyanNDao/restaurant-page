import './style.css';
import createTabs from './init.js';
import { designHome } from './home.js';

const main = document.querySelector('#content');


resetContentDiv()
designHome();


window.resetContentDiv = resetContentDiv;

function resetContentDiv(){
    main.innerHTML = '';
    createTabs();
}