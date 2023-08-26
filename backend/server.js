import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config(); //This allows us to pull variables from dotenv file
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes); //Created api endpoints to connect frontend from our backend
app.use('/api/v1/post', dalleRoutes);

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