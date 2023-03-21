import restaurantPhoto from './restaurant.jpeg'
const homeStringOne = 
    `Are you ready for the best Indian food of your life? There\'s no place like Ryan\'s Indian food. Freshly cooked just for you, we guarantee that your mouth will thank you
    and your stomach will be forever grateful. Look at the beautiful exterior of our restaurant. This place is to die for!`
const main = document.querySelector('#content');
const hoursOfBusiness = {
    'Monday - Friday': '11:30AM - 7PM',
    'Saturday': '3PM - 3AM',
    'Sunday':  '1PM - 9PM',
}


export default function designHome(){
    designHomeSummary()
    designHomeHours()
}

function designHomeHours(){
    const homeDiv = document.querySelector('.home-div');
    let hoursOfOperations = document.createElement('div');
    let hoursOfOperationHeader = document.createElement('h2');
    hoursOfOperationHeader.textContent = 'Hours of Operation';
    hoursOfOperations.appendChild(hoursOfOperationHeader);
    hoursOfOperations.classList.add('hours-of-operations');
    for (let days in hoursOfBusiness){
        let hoursRow = document.createElement('p');
        hoursRow.textContent = `${days}: ${hoursOfBusiness[days]}`;
        hoursOfOperations.appendChild(hoursRow);
    }
    homeDiv.appendChild(hoursOfOperations);

}


function designHomeSummary(){
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