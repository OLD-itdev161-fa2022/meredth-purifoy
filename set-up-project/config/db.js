import mongoose from 'mongoose';
import config from 'config';

// GET THE CONNECTION STRING
const db = config.get('mongoURI');

// CONNECT TO MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);

        // EXIT WITH FAILURE CODE
        process.exit(1);
    }
};

export default connectDatabase;