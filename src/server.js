require('dotenv').config();
const { PORT = 8000, REACT_APP_REACT_URL } = process.env;
const app = require("./app");
const connectDB = require('./db/connect');

const listener = () => console.log(`Listening on Port ${PORT}!`);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, listener);
        console.log(`React app URL: ${REACT_APP_REACT_URL}`);
    }  catch (error) {
        console.log(error);
    }
};

start();