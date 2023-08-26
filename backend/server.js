import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config(); //This allows us to pull variables from dotenv file
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get("/", async (req, res) => {
    res.send("Serber is running");
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(5100, () => console.log("Server runs"));
    } catch (error) {
        console.log(error);
    }

}
startServer();