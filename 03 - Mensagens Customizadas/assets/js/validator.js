const validators = {
    birthdate: $input => validateBirthdate($input),
}

const errorsType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const errorMessages = {
    name: {
        valueMissing: "O campo nome não pode estar vazio"
    },
    email: {
        valueMissing: "O campo de email não pode estar vazio",
        typeMismatch: "O email digitado não é válido"
    },
    password: {
        valueMissing: "O campo de senha não pode estar vazio",
        patternMismatch: "A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos"
    },
    birthdate: {
        valueMissing: "O campo de data de nascimento não pode estar vazio",
        customError: "Você deve ser maior que 18 anos para se cadastrar"
    }
}

export function validate($input) {
    const inputType = $input.dataset.type;

    if(validators[inputType]) {
        validators[inputType]($input);
    }

    if($input.validity.valid) {
        $input.parentElement.classList.remove("input-container--invalido");
        $input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
    } else {
        $input.parentElement.classList.add("input-container--invalido");
        $input.parentElement.querySelector(".input-mensagem-erro").innerHTML = showMessageError(inputType, $input);
    }
}

function showMessageError(inputType, $input) {
    let message = "";
    errorsType.forEach(errorType => {
        if($input.validity[errorType]) {
            message = errorMessages[inputType][errorType];
        }
    });
    
    return message;
}

function validateBirthdate($input) {
    const birthdate = new Date($input.value);
    let message = "";

    if(!greaterThan18(birthdate)) {
        message = "Você deve ser maior que 18 anos para se cadastrar";
    }

    $input.setCustomValidity(message);
}

function greaterThan18(data) {
    const currentDate = new Date();

    const dateMore18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

   return dateMore18 <= currentDate; 
}