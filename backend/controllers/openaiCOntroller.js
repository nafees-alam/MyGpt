const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require('openai');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const genAI = new GoogleGenerativeAI(process.env.API_KEY);


exports.summaryController = async (req, res) => {
  
  try {
    const { text } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Summarize this ${text}`;
    
    const data = await model.generateContent(prompt);
    if (data) {
      if (data) {
        return res.status(200).json(data.response.candidates[0].content.parts[0].text);
      }
    }
  } catch (err) {
    console.error('Error details:', err.response ? err.response.data : err.message);
    return res.status(500).json({
      message: err.message,
      error: err.response ? err.response.data : 'Internal Server Error',
    });
  }
};
exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate a breif paragraph on ${text}`;
    
    const data = await model.generateContent(prompt);
    if (data) {
      if (data) {
        return res.status(200).json(data.response.candidates[0].content.parts[0].text);
      }
    }
  } catch (err) {
    console.error('Error details:', err.response ? err.response.data : err.message);
    return res.status(500).json({
      message: err.message,
      error: err.response ? err.response.data : 'Internal Server Error',
    });
  }
};
exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Answer question  in simple words ${text}`;
    
    const data = await model.generateContent(prompt);
    if (data) {
      if (data) {
        return res.status(200).json(data.response.candidates[0].content.parts[0].text);
      }
    }
  } catch (err) {
    console.error('Error details:', err.response ? err.response.data : err.message);
    return res.status(500).json({
      message: err.message,
      error: err.response ? err.response.data : 'Internal Server Error',
    });
  }
};
exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Convert these instruction into javascript code ${text}`;
    
    const data = await model.generateContent(prompt);
    if (data) {
      if (data) {
        return res.status(200).json(data.response.candidates[0].content.parts[0].text);
      }
    }
  } catch (err) {
    console.error('Error details:', err.response ? err.response.data : err.message);
    return res.status(500).json({
      message: err.message,
      error: err.response ? err.response.data : 'Internal Server Error',
    });
  }
};