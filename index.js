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

var checkChars = () => {
    console.log(shift.getAttribute("shift") == "true" && caps.getAttribute("caps") == "true" && alt[0].getAttribute("alt") == "true");
    if(caps.getAttribute("caps") == "true" && shift.getAttribute("shift") == "true" && alt[0].getAttribute("alt") == "true") {
        
        for(var i = 0; i < charButtons.length; i++) {
            charButtons[i].innerText = charContainers[i].altChar;
        }

    } else if (shift.getAttribute("shift") == "false" && caps.getAttribute("caps") == "true" && alt[0].getAttribute("alt") == "true") {

        for(var i = 0; i < charButtons.length; i++) {
            charButtons[i].innerText = charContainers[i].altShiftedChar;
        }

    } else if (shift.getAttribute("shift") == "false" && caps.getAttribute("caps") == "true" && alt[0].getAttribute("alt") == "true") {
        
    }
};

shift.addEventListener('click', () => {

    if(shift.getAttribute("shift") == "false") {

        shift.setAttribute("shift","true");

    } else {

        shift.setAttribute("shift", "false");

    }



})

alt.forEach(btn => {
    btn.addEventListener('click', function () {

    if(alt[0].getAttribute("alt") == "false") {

        alt[0].setAttribute("alt","true");

    } else {

        alt[0].setAttribute("alt", "false");

    }

    })



});

caps.addEventListener('click', () => {

    if(caps.getAttribute("caps") == "false") {

        caps.setAttribute("caps","true");

    } else {

        caps.setAttribute("caps", "false");

    }

    checkChars();

})

charButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        text.innerText += this.innerText;
        if(shift.getAttribute("shift") == "true") {
            shift.setAttribute("shift", "false");
        }
        if(alt[0].getAttribute("alt") == "true") {
            alt[0].setAttribute("alt", "false");
        }
    })
})