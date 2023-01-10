const validators = {
    birthdate: $input => validateBirthdate($input),
}

export function validate($input) {
    const inputType = $input.dataset.type;

    if(validators[inputType]) {
        validators[inputType]($input);
    }
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