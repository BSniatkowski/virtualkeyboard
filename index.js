let text = document.querySelector("div.text-container");

let charButtons = document.querySelectorAll("button:not([class])");

let backspace = document.querySelector("button.backspace");

let shift = document.querySelector("button.shift");

let alt = document.querySelectorAll("button.alt");

let caps = document.querySelector("button.caps");

let space = document.querySelector("button.space");

backspace.addEventListener('click', () => {

    if(text.innerText != "" || text.innerText != null) {
        text.innerText = text.innerText.slice(0, text.innerText.length - 1);
    }
})

charButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        text.innerText += this.innerText;
        if(caps.getAttribute("caps") == "false" && charButtons[13].innerText == "Q") {
        shifted();
        }
        if(caps.getAttribute("caps") == "true" && charButtons[13].innerText == "q") {
            shifted();
        }
    })
});

const shifted = () => {
    charButtons.forEach(btn => {
        let shiftedChar = btn.getAttribute("shifted-char");
        btn.setAttribute("shifted-char",btn.innerText);
        btn.innerText = shiftedChar;
    })
};

shift.addEventListener('click', () => {
    shifted();
});

space.addEventListener('click', () => {text.innerText += '\xa0'});

caps.addEventListener('click', function () {
    shifted();
    if(caps.getAttribute("caps") == "false") {
        caps.setAttribute("caps","true")
    } else {
        caps.setAttribute("caps","false")
    }
});

