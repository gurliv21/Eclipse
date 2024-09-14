import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not found.' });
  }

  try {
    const chat = model.startChat({
      history: req.body.history,
    });

    const result = await chat.sendMessage(req.body.message);
    const response = await result.response;
    const text = await response.text();

    return res.status(200).send(text);
  } catch (error) {
    console.error('Error processing request:', error.message);
    return res.status(500).json({ error: 'Internal Server Error: ' + error.message });
  }
}
