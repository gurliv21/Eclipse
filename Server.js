import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';  

dotenv.config();

const app = express();
const port = 3002;

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('API key not found. Please set GEMINI_API_KEY in your .env file.');
  process.exit(1); // Exit if no API key is found
}

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json',
};

app.use(cors());  // Enable CORS for all routes
app.use(express.json());

app.post('/gemini', async (req, res) => {
  const genAI = new GoogleGenerativeAI(apiKey); // Initialize genAI within the route handler

  try {
    const model = await genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      ...generationConfig
    });

    const chat = await model.startChat(); // Start chat without history

    const result = await chat.sendMessage(req.body.message || 'sum of two numbers in java'); // Use default message if none provided
    const text = await result.response.text(); // Await text response

    console.log(result);

    res.send(text);
  } catch (error) {
    console.error('Error processing request:', error.message);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
