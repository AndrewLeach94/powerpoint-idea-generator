import { adjectives, nouns, verbs } from './words.js';

const generateAdjectiveNumber = (max, min) => {
    const number =  Math.floor(Math.random() * (max - min) + min);
    return number;
}

const generateVerbNumber = (max, min) => {
    const number =  Math.floor(Math.random() * (max - min) + min);
    return number;
}

const generateNounNumber = (max, min) => {
    const number =  Math.floor(Math.random() * (max - min) + min);
    return number;
}

const triggerRandomName = () => {
    const adjectiveContainer = document.querySelector("#random-adjective");
    const nounContainer = document.querySelector("#random-noun");

    adjectiveContainer.textContent = adjectives[generateAdjectiveNumber(1099, 0)];
    nounContainer.textContent = nouns[generateNounNumber(1937, 0)];
}

const createButtonListener = () => {
    const trigger = document.querySelector("#button_new-name");
    trigger.addEventListener("click", () => {
        triggerRandomName();
    })
};

createButtonListener();