require('dotenv').config();
const PORT = process.env.REACT_APP_REACT_URL || 8000;
const app = require("./app");
const connectDB = require('./db/connect');

const listener = () => console.log(`Listening on Port ${PORT}!`);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, listener);
    }  catch (error) {
        console.log(error);
    }
};

start();