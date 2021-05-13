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

const animateText = () => {
    const text = document.querySelector(".powerpoint-title");
    text.classList.add("animate-in");

    const cleanUp = () => {
        text.addEventListener('animationend', () => {
            text.classList.remove("animate-in"); 
        });
    }
    cleanUp();
}

const playLottie = () => {
    console.log("play")
    const player = document.querySelector("lottie-player");
    player.seek(0);
    player.play()
}

const createButtonListener = () => {
    const trigger = document.querySelector("#button_new-name");
    trigger.addEventListener("click", () => {
        triggerRandomName();
        animateText();
        playLottie();
    })
};

createButtonListener();

