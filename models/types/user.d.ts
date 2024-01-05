import mongoose from 'mongoose';

interface User {
    username: string;
    email: string;
    password: string;
}

interface UserModelInterface extends User, mongoose.Document { }

export default UserModelInterface;