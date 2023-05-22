import * as dotenv from 'dotenv';
dotenv.config();

export const development = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}