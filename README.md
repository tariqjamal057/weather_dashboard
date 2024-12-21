# ReactJS Weather App

A modern weather application built with React that provides real-time weather information and forecasts for cities worldwide. The app features an intuitive interface with interactive weather charts, search history tracking, and smart caching for optimal performance. Users can search for any city, view detailed weather metrics, and access 5-day forecasts with hourly breakdowns. The app securely stores search history using encryption and implements responsive design for seamless usage across all devices.

**Access the website using this link: `https://reactjs-weather-app-sable.vercel.app`**

## Features
- 🔍 Search and track weather for any city
- ☁️ Display top 5 most searched cities
- ⛅ Current weather conditions with detailed metrics
- 📌 Location-based weather detection
- 📱 Responsive design for all devices
- 🗃️ Local storage caching for improved performance
- 🔐 Search history encryption for security

## TODO
- 🔑 Authentioation
- 📄 Saved Location Page UI

## Tech Stack
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![CryptoJS](https://img.shields.io/badge/CryptoJS-e3f30c?style=for-the-badge&logo=crypto.js&logoColor=white)](https://cryptojs.gitbook.io/)
[![Express.js](https://img.shields.io/badge/Express.js-3c873a?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)


## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm/yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/reactjs_weather_app.git
```

2. Install client app dependencies

```bash
npm install
```

3. Install server app dependencies
```bash
cd server
```
```bash
npm install
```

### Setup Environment Variables
Before running the app, you need to set env variables to make it work.

create a .env file using the below command
1. Using cp (Unix/Linux/MacOS)
```bash
cp .env.example .env
```
2. Using copy (Windows)
```bash
copy .env.example .env
```

### Run the app
1. Run the client app
```bash
npm run dev
```
2. Run the server app

    Using node command (changes will be reflected in real-time)
    ```bash
    node server/app.js
    ```
    Using nodemon (changes will be reflected in real-time)
    ```bash
    nodemon server/app.js
    ```
