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
const PORT = process.env.PORT || 3000;

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

    let query_param;

    if (city) {
      query_param = `q=${city}`;
    } else if (lat && lon) {
      query_param = `lat=${lat}&lon=${lon}`;

    } else {
      return res
        .status(400)
        .json({ message: "City name or coordinates required" });
    }
    const url = `${process.env.WEATHER_API_BASE_URL}/weather?${query_param}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || "Failed to fetch weather data",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
