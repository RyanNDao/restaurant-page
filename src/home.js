import restaurantPhoto from './restaurant.jpeg'
const homeStringOne = 
    `Are you ready for the best Indian food of your life? There\'s no place like Ryan\'s Indian food. Freshly cooked just for you, we guarantee that your mouth will thank you
    and your stomach will be forever grateful. Look at the beautiful exterior of our restaurant. This place is to die for!`
const main = document.querySelector('#content');

export function designHome(){
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');
    let homeTitle = document.createElement('h2');
    homeTitle.classList.add('home-title');
    homeTitle.textContent = 'Home of the Indian Food';
    homeDiv.appendChild(homeTitle);
    const restaurantPhotoVariable = new Image();
    restaurantPhotoVariable.src = restaurantPhoto;
    homeDiv.appendChild(restaurantPhotoVariable);
    let homeStringOneVariable = document.createElement('p');
    homeStringOneVariable.textContent = homeStringOne;
    homeDiv.appendChild(homeStringOneVariable);
    main.appendChild(homeDiv);
}