import { validate } from "./validator.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("blur", (event) => {
        validate(event.target);
    });
});