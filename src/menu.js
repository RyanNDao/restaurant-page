import { createElement } from "./index.js";
import paneerImage from './paneer-masala.jpg';
import lambRoganJoshImage from './lamb-rogan-josh.jpg';
import chickenTikkaMasalaImage from './chicken-tikka-masala.jpeg';
import chickenSaagImage from './chicken-saag.jpg';
import chickenVindalooImage from './chicken-vindaloo.jpg';


const main = document.querySelector('#content');


export default function designMenu(){
    let menuDiv = createElement('div','menu-div','');
    menuDiv.appendChild(createElement('h2',['menu-title'],'Indian Place Menu'));
    main.appendChild(menuDiv);
    menuDiv.appendChild(createFoodInMenu(paneerImage,'Paneer Masala','This freshly made paneer masala is made from the freshest cheese. Cooked in a spiced tomato sauce. Topped off with a cilantro garnish and creamy finish.','$10.99'));
    menuDiv.appendChild(createFoodInMenu(lambRoganJoshImage, 'Lamb Rogan Rosh', 'This earthy dish is sizzling with flavor! Cooked with a variety of vegetables, this dish will bring a strong soothing aroma to any person who takes a bite out of this delicious meal.','$13.99'));
    menuDiv.appendChild(createFoodInMenu(chickenTikkaMasalaImage,'Chicken Tikka Masala' ,'An indian classic! This tomato-based dish is spicy, creamy, and savory. Bold with flavor, this classic is the official dish of the United Kingdom. Find out why!','$12.99'));
    menuDiv.appendChild(createFoodInMenu(chickenSaagImage,'Chicken Saag', 'Served with spinish and a variety of spices, this dish will take you by surprise by how delicious it is! This green creamy dish will appease any lover of greens!','$8.99'));
    menuDiv.appendChild(createFoodInMenu(chickenVindalooImage,'Chicken Vindaloo','A spicy dish that is filled with taste, marinated for hours so the chicken can absorb all of the flavors. Try out this dish if you want a kick to your dinner!','$10.99'));

}


function createFoodInMenu(img, name, description, price ){
    let foodDiv = createElement('div','food-item','');
    let foodImage = new Image();
    foodImage.src = img;
    foodDiv.appendChild(foodImage);
    let foodDescriptionDiv = createElement('div','food-description-container','');
    foodDescriptionDiv.appendChild(createElement('h2','food-name', name));
    foodDescriptionDiv.appendChild(createElement('p','food-description',description));
    foodDiv.appendChild(foodDescriptionDiv);
    foodDiv.appendChild(createElement('p','food-price',price));
    return foodDiv;
}