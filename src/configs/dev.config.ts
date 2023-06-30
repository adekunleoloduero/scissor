import * as dotenv from 'dotenv';
dotenv.config();

export const development = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    BASE_URL: process.env.BASE_URL,
    IP_DATA_API_KEY: process.env.IP_DATA_API_KEY
}