import express from 'express';
import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

router.route('/').get((req, res) => {
    res.send("Dall-e says 'HII'");
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({ photo: image });

    } catch (error) {
        res.status(500);
        console.log('Error in getting the prompt', error);
    }
})

export default router;

// For anyone else getting Failed to connect error. Check that your NodeJS is not crashing. If a previous request causes your NodeJS server to crash or restart this is the same error on subsequent requests.