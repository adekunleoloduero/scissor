import app from './server';
import { config } from './configs';
import mongoDBConnection from './configs/mongo.config';

//Connect to MongoDB
new mongoDBConnection();


app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}...`);
});
