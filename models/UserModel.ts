import mongoose, { Schema } from 'mongoose';
import UserModelInterface from './types/user';
import { isValidEmail } from '@/utils/validations';

const userSchema = new Schema<UserModelInterface>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [
            {
                validator: (value: string) => {
                    return isValidEmail(value)
                },
                message : "invalid email address."
            }
        ]
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;