import mongoose from 'mongoose';
import { config } from './';

const dbURL = config.MONGO_URL;


class MongoDBConnection {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(dbURL)
        .then(()=> {
            console.log('Connected to mongoDB...');
        })
        .catch((error) => {
            console.log('mongoDB connection failed!')
            console.error(error);
        })
    }
}

export default MongoDBConnection;