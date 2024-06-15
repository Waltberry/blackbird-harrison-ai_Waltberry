/*Email Validation
    Library: Use email-validator (https://www.npmjs.com/package/email-validator).
    Functionality: Ensure the input email is in a valid format.
Password Validation
    Requirements:
    Minimum of 8 characters.
    Contains both uppercase and lowercase letters.
    Contains at least 1 numerical digit (0-9).
    Contains at least 1 special character (!@#$%^&*, etc).*/

import validator from 'email-validator'

export function validateEmail(email){
    return validator.validate(email)
}

export function validatePassword(password){
    const minLength = /.{8,}/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const numDigit = /[0-9]/;
    const specialChar = /[!@#$%^&*]/;

    return minLength.test(password) &&
        upperCase.test(password) &&
        lowerCase.test(password) &&
        numDigit.test(password) &&
        specialChar.test(password);
}