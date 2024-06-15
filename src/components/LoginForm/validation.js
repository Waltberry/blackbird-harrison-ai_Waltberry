// /*Email Validation
//     Library: Use email-validator (https://www.npmjs.com/package/email-validator).
//     Functionality: Ensure the input email is in a valid format.
// Password Validation
//     Requirements:
//     Minimum of 8 characters.
//     Contains both uppercase and lowercase letters.
//     Contains at least 1 numerical digit (0-9).
//     Contains at least 1 special character (!@#$%^&*, etc).*/

// import validator from 'email-validator'

// export function validateEmail(email){
//     return validator.validate(email)
// }

// export function validatePassword(password){
//     const minLength = /.{8,}/;
//     const upperCase = /[A-Z]/;
//     const lowerCase = /[a-z]/;
//     const numDigit = /[0-9]/;
//     const specialChar = /[!@#$%^&*]/;

//     return minLength.test(password) &&
//         upperCase.test(password) &&
//         lowerCase.test(password) &&
//         numDigit.test(password) &&
//         specialChar.test(password);
// }

import * as EmailValidator from 'email-validator';

const hasSpecialChar = (str) => {
    return /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(str);
}

const hasNumber = (str) => {
    return /\d/.test(str);
}

const hasLowerCase = (str) => {
    return str.toUpperCase() !== str;
}

const hasUpperCase = (str) => {
    return str.toLowerCase() !== str;
}

function validatePassword(text) {
    if (text.length < 8) return "Password should be 8 or more characters";
    if (!hasLowerCase(text) || !hasUpperCase(text)) return "Password should contains minimum 1 character for both uppercase and lowercase letter";
    if (!hasNumber(text)) return "Password should contains minimum 1 digit of numeric value";
    if (!hasSpecialChar(text)) return "Password should contains minimum 1 special character";
    return "";
}

function validateEmail(email) {
    return EmailValidator.validate(email);
}

export {
    validatePassword,
    validateEmail,
}