import { createElement } from "./index.js";

const main = document.querySelector('#content');


export default function designContact(){
    let contactDiv = createElement('div','contact-div','');
    contactDiv.appendChild(createElement('h2','contact-title','Make A Reservation!'));
    let contactForm = createElement('form','contact-form','');
    let formRowOne = createElement('div','form-row','');
    let firstNameInput = createFormElement('first-name','First Name','text','John');
    let lastNameInput = createFormElement('last-name','Last Name','text','Doe');
    formRowOne.appendChild(firstNameInput);
    formRowOne.appendChild(lastNameInput);
    contactForm.appendChild(formRowOne);

    let formRowTwo = createElement('div','form-row','');
    let emailInput = createFormElement('email','Email Address','email','example@example.com');
    formRowTwo.appendChild(emailInput);
    contactForm.appendChild(formRowTwo);

    let formRowThree = createElement('div','form-row','');
    let phoneInput = createFormElement('phone','Phone Number','tel','123-456-7890');
    formRowThree.appendChild(phoneInput);
    contactForm.appendChild(formRowThree);

    let reservationDiv = createElement('div','form-row','');
    let reservation = createElement('label','','Details About Reservation');
    let details = createElement('textarea','','');
    reservationDiv.appendChild(reservation);
    reservationDiv.appendChild(details);
    contactForm.appendChild(reservationDiv);

    contactForm.appendChild(createElement('button','','Submit Reservation'));

    contactDiv.appendChild(contactForm);
    main.appendChild(contactDiv);
}

function createFormElement(id,name,inputType,placeholder){
    let formInputDiv = createElement('div','form-input','');
    let formLabel = createElement('label','',name);
    formLabel.for = id;
    let formInput = createElement('input','','');
    formInput.id = id;
    formInput.type = inputType;
    formInput.placeholder = placeholder;
    formInputDiv.appendChild(formLabel);
    formInputDiv.appendChild(formInput);
    return formInputDiv;
}