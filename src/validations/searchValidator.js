import validator from 'validator';

export default function validateInput(data) {
    let message = false;

    if (validator.isEmpty(data)) {
        message = 'siemanko'
    }

    if (Validator.isNull(data.password)) {
        errors.password = 'This field is required';
    }

    return message;
}



//komponent moze zwrocic obiekt który ma dwie wartosci
//TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!