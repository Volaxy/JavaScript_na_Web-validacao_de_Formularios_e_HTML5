import { validate } from "./validator.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    if(input.dataset.type === "preco") {
        SimpleMaskMoney.setMask(input, {
            afterFormat(e) { console.log('afterFormat', e); },
            allowNegative: false,
            beforeFormat(e) { console.log('beforeFormat', e); },
            negativeSignAfter: false,
            prefix: 'R$ ',
            suffix: '',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'move'
        })
    }

    input.addEventListener("blur", (event) => {
        validate(event.target);
    });
});