import UserModel from '@models/UserModel';
import { connectDB, disconnectDB } from '@utils/db';
import { getResponseError } from '@utils/responseComposer';

export async function POST(request: Request) {
    try {
        await connectDB();
        const { username, email, password } = await request.json();
        const newUser = await UserModel.create({ username, email, password });
        return getResponseError('User created successfully', 200, { userId: newUser._id });
    } catch (error:any) {
        console.error(error._message);
        return getResponseError('Error: Something went wrong', 500);
    } finally {
        await disconnectDB();
    }
}