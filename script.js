import { prompts } from '.prompts.js';

const promptEl = document.getElementById("prompt-para");
const themeDiv = document.getElementById("nav");

//const prompts = ["Test1", "Test2", "Test3", "Test4", "Test5"];

function generatePrompt() {
    let num = Math.floor(Math.random() * 5);
    if (promptEl.textContent == prompts[num]) {
        generatePrompt();
    } else {
        promptEl.textContent = prompts[num];
        console.log("Prompt recorded successfully.");
    }
}

function changeTheme() {
    let element = document.body;
    element.classList.toggle("light-mode");
}
