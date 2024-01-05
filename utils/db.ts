import mongoose, { Error } from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test_nextjs');
    } catch (error: Error | any) {
        process.exit(1);
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
    } catch (error: Error | any) {
        process.exit(1);
    }
};

export { connectDB, disconnectDB };