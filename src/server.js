require('dotenv').config();
const { FLASHCARDS_API_BASE_URL } = process.env;
const app = require("./app");
const connectDB = require('./db/connect');

const listener = () => console.log(`Listening on ${FLASHCARDS_API_BASE_URL}!`);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(FLASHCARDS_API_BASE_URL, listener);
        console.log(`React app URL: ${FLASHCARDS_API_BASE_URL}`);
    }  catch (error) {
        console.log(error);
    }
};

start();