let text = document.querySelector("div.text-container");

let charButtons = document.querySelectorAll("button:not([class])");

let backspace = document.querySelector("button.backspace");

let shift = document.querySelector("button.shift");

let alt = document.querySelectorAll("button.alt");

let caps = document.querySelector("button.caps");

let space = document.querySelector("button.space");

var capsBool = false;
var shiftBool = false;
var altBool = false;

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

const lowOrHigh = () => {

    switch((!(shiftBool == capsBool) && (shiftBool != capsBool))) {

        case true: {

            for(let i = 0; i < charButtons.length; i++) {

                charButtons[i].innerText = charContainers[i].shiftedChar;

            }

            break;
        }

        case false: {

            for(let i = 0; i < charButtons.length; i++) {

                charButtons[i].innerText = charContainers[i].char;

            }

            break;
        }

    }

}

const altOrNorm = () => {

    switch(altBool) {

        case true: {

            if((!(shiftBool == capsBool) && (shiftBool != capsBool))) {

                for(let i = 0; i < charButtons.length; i++) {

                    charButtons[i].innerText = charContainers[i].altShiftedChar;
    
                }

            } else {

                for(let i = 0; i < charButtons.length; i++) {

                    charButtons[i].innerText = charContainers[i].altChar;
    
                }

            }

            break;
        }

        case false: {

            if((!(shiftBool == capsBool) && (shiftBool != capsBool))) {

                for(let i = 0; i < charButtons.length; i++) {

                    charButtons[i].innerText = charContainers[i].shiftedChar;
    
                }

            } else {

                for(let i = 0; i < charButtons.length; i++) {

                    charButtons[i].innerText = charContainers[i].char;
    
                }

            }

            break;
        }

    }

}

space.addEventListener('click', () => {text.innerText += '\xa0'});

backspace.addEventListener('click', () => {

    if(text.innerText != "" || text.innerText != null) {
        text.innerText = text.innerText.slice(0, text.innerText.length - 1);
    }
});

caps.addEventListener('click', () => {

    if(capsBool) {

        capsBool = false;

    } else {

        capsBool = true;

    }

    lowOrHigh();

    altOrNorm();

})


shift.addEventListener('click', () => {

    if(shiftBool) {

        shiftBool = false;

    } else {

        shiftBool = true;

    }

    lowOrHigh();

    altOrNorm();

})

alt.forEach(btn => {
    btn.addEventListener('click', function () {

    if(altBool) {

        altBool = false;

    } else {

        altBool = true;

    }

    altOrNorm();

    }) 

});

charButtons.forEach(btn => {
    btn.addEventListener('click', function() {

        text.innerText += this.innerText;

        if(shiftBool) {

            shiftBool = false;

        }
        if(altBool) {

            altBool = false;

        }

        lowOrHigh();

        altOrNorm();

    })
})