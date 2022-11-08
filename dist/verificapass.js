import { spanPass, userPass } from "./index.js";
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const lengthChar = document.getElementById("length");
const characters = document.getElementById("charters");
export let verificarSenha = (userInput) => {
    let count = 0;
    if (letter != null && userInput != null) {
        let lowerCaseLetters = /[a-z]/g;
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        document.querySelector("#circleLetter").style.fill = "red";
        if (userInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
            document.querySelector("#circleLetter").style.fill = "#04AA6D";
            count++;
        }
    }
    let upperCaseLetters = /[A-Z]/g;
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    document.querySelector("#circleCapital").style.fill = "red";
    if (userPass.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        document.querySelector("#circleCapital").style.fill = "#04AA6D";
        count++;
    }
    let numbers = /[0-9]/g;
    number.classList.remove("valid");
    number.classList.add("invalid");
    document.querySelector("#circleNumber").style.fill = "red";
    if (userPass.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        document.querySelector("#circleNumber").style.fill = "#04AA6D";
        count++;
    }
    lengthChar.classList.remove("valid");
    lengthChar.classList.add("invalid");
    document.querySelector("#circleLength").style.fill = "red";
    if (userPass.value.length >= 8) {
        lengthChar.classList.remove("invalid");
        lengthChar.classList.add("valid");
        document.querySelector("#circleLength").style.fill = "#04AA6D";
        count++;
    }
    characters.classList.remove("valid");
    characters.classList.add("invalid");
    document.querySelector("#circleCharters").style.fill = "red";
    if (userPass.value.match(/\w[!\@\$\#]/)) {
        characters.classList.remove("invalid");
        characters.classList.add("valid");
        document.querySelector("#circleCharters").style.fill = "#04AA6D";
        count++;
    }
    if (count >= 5) {
        userPass.style.borderColor = "green";
        spanPass.innerHTML = "";
    }
    else {
        userPass.style.borderColor = "red";
        spanPass.innerHTML = "<strong>O campo senha deve ser preenchido</strong>";
        spanPass.querySelector("strong").style.color = "red";
    }
};
