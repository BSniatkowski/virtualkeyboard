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
        if(alt[0].getAttribute("alt") == "true" && charButtons[0].innerText == "`") {

            alt[0].setAttribute("alt", "false");

            charButtons.forEach(btn => {
                if(btn.hasAttribute("alt-char") && charButtons[0].innerText == "`") {
                    let char = btn.getAttribute("alt-char");
                    btn.setAttribute("alt-char", btn.innerText);
                    btn.innerText = char;
                }
            })

        } else if (alt[0].getAttribute("alt") == "true") {

            alt[0].setAttribute("alt", "false");

            charButtons.forEach(btn => {
                if(btn.hasAttribute("alt-char") && charButtons[0].innerText == "~") {
                    let char = btn.getAttribute("alt-shifted-char");
                    btn.setAttribute("alt-shifted-char", btn.innerText);
                    btn.innerText = char;
                }
            })
        } 

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

alt.forEach((btn) => {
btn.addEventListener('click', function () {
    
    if(alt[0].getAttribute("alt") == "false" && charButtons[0].innerText == "`") {

        console.log(charButtons[0].innerText == "`")

        alt[0].setAttribute("alt", "true");
        charButtons.forEach(btn => {
            if(btn.hasAttribute("alt-char")) {
                let char = btn.getAttribute("alt-char");
                btn.setAttribute("alt-char", btn.innerText);
                btn.innerText = char;
            }
        })
    } else if(alt[0].getAttribute("alt") == "true" && charButtons[0].innerText == "`") {

        alt[0].setAttribute("alt", "false");

        charButtons.forEach(btn => {
            if(btn.hasAttribute("alt-char")) {
                let char = btn.getAttribute("alt-char");
                btn.setAttribute("alt-char", btn.innerText);
                btn.innerText = char;
            }
        })
    } else if (alt[0].getAttribute("alt") == "true" && charButtons[0].innerText == "~") {

        alt[0].setAttribute("alt", "false");

        charButtons.forEach(btn => {
            if(btn.hasAttribute("alt-char")) {
                let char = btn.getAttribute("alt-shifted-char");
                btn.setAttribute("alt-shifted-char", btn.innerText);
                btn.innerText = char;
            }
        })

    } else if(alt[0].getAttribute("alt") == "false" && charButtons[0].innerText == "~") {

        alt[0].setAttribute("alt", "true");

        charButtons.forEach(btn => {
            if(btn.hasAttribute("alt-char")) {
                let char = btn.getAttribute("alt-shifted-char");
                btn.setAttribute("alt-shifted-char", btn.innerText);
                btn.innerText = char;
            }
        })

    }
})
});