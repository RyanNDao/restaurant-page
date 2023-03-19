const main = document.querySelector('#content');
const buttonClasses = ['home-tab', 'menu-tab','contact-tab']
const buttonText = ['HOME', 'MENU', 'CONTACT US']

export default function createTabs() {
    let tabDiv = document.createElement('div');
    tabDiv.classList.add('tabs');
    for (let index in buttonClasses){
        const buttonToAdd = document.createElement('button');
        buttonToAdd.classList.add(buttonClasses[index]);
        buttonToAdd.classList.add('tab-button');
        buttonToAdd.textContent = buttonText[index];
        tabDiv.appendChild(buttonToAdd);
    }
    main.appendChild(tabDiv);
}
