import { development } from './dev.config';
// import { staging } from './stage.config';
// import { production } from './prod.config';
import * as dotenv from 'dotenv';
dotenv.config();


const env = process.env.NODE_ENV as string;

const configs: Record<string, any> = {
    development,
}

export const config = configs[env];