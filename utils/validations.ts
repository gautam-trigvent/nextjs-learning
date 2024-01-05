import validator from 'validator';

export function isValidEmail(email: string): boolean {
    return validator.isEmail(email);
}

export function isValidUsername(username: string): boolean {
    return validator.isAlphanumeric(username, 'en-US') && !validator.isEmpty(username) && !validator.contains(username, ' ');
}