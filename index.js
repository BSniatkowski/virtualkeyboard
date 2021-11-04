let text = document.querySelector("div.text-container");

let charButtons = document.querySelectorAll("button:not([class])");

let backspace = document.querySelector("button.backspace");

let shift = document.querySelector("button.shift");

let alt = document.querySelectorAll("button.alt");

let caps = document.querySelector("button.caps");

let space = document.querySelector("button.space");

class charContainer {

    constructor(BUTTON) {

        this.char = BUTTON.innerText;
        this.shiftedChar = BUTTON.getAttribute("shifted-char");
        this.altChar = BUTTON.getAttribute("alt-char");
        this.altShiftedChar = BUTTON.getAttribute("alt-shifted-char");
    }
};

var charContainers = [];

for(let i = 0; i < charButtons.length; i++) {
    charContainers[i] = new charContainer(charButtons[i]);
}

console.log(charContainers);

space.addEventListener('click', () => {text.innerText += '\xa0'});

backspace.addEventListener('click', () => {

    if(text.innerText != "" || text.innerText != null) {
        text.innerText = text.innerText.slice(0, text.innerText.length - 1);
    }
});