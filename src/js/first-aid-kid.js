import { dataFirstAidKid } from './data-first-aid-kid';

const createElement = (elementName, positionSelector, position) => {
    const element = document.createElement(elementName);
    const positionElement = document.querySelector(positionSelector);
    element.classList.add(`${elementName}`);
    if (position === "prepend") {
        positionElement.prepend(element);
    } else if (position === 'append') {
        positionElement.append(element);
    } else {
        console.error("Invalid position parameter. Please use 'prepend' or 'append'.");
    }
};

createElement('form', '.main', 'prepend');

function transformName(exampleName) {
    let newName = '';
    Array.from(exampleName).forEach((element, index) => {
        if (element === element.toUpperCase() && index !== 0) {
            newName += ` ${element.toLowerCase()}`;
        } else if (element === element.toLowerCase() && index === 0) {
            newName += element.toUpperCase();
        } else {
            newName += element;
        }
    });
    return newName;
}

const formAdd = document.querySelector('.form');
const keysData = Object.entries(dataFirstAidKid[0]);

const creatorForm = keysData.map(el => {
    let nameEl = el[0];
    let modifiedName = transformName(nameEl);
    return `<label>
        ${modifiedName}
        <input type='text' name='${el[0]}'></input>
    </label>`;
}).join('');

formAdd.insertAdjacentHTML('beforeend', creatorForm);
