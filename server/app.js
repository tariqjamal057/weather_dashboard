import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT;

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(","),
  methods: ["GET"],
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Weather API endpoint
app.get("/api/weather", async (req, res) => {
  try {
    const { city, lat, lon } = req.query;
    let url;

    if (city) {
      url = `${process.env.WEATHER_API_BASE_URL}/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
    } else if (lat && lon) {
      url = `${process.env.WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
    } else {
      return res
        .status(400)
        .json({ message: "City name or coordinates required" });
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || "Failed to fetch weather data",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
