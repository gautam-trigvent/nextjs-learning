import bcrypt from 'bcrypt';

export async function encryptPassword(plainPassword: string): Promise<string> {
    return bcrypt.hash(plainPassword, 12);
}

export async function comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
}