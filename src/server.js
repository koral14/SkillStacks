require('dotenv').config();
const { REACT_APP_REACT_URL } = process.env;
const app = require("./app");
const connectDB = require('./db/connect');

// const listener = () => console.log(`Listening on Port ${REACT_APP_REACT_URL}!`);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Listening on Port ${process.env.PORT || 8000}!`);
            console.log(`React app URL: ${REACT_APP_REACT_URL}`);
        });
    }  catch (error) {
        console.log(error);
    }
};

start();