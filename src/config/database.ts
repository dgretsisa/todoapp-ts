import mongoose from 'mongoose';
import config from './config';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.database.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });

        console.log(`Database connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export = connectDB;