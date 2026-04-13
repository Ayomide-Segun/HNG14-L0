Stage 0 Backend Assessment – API Integration & Data Processing
Project Overview

This project is a simple REST API built with Node.js and Express that integrates with an external API to predict gender based on a given name. The API processes the raw response, applies business logic, and returns a structured output.

Tech Stack
Node.js
Express.js
Axios
CORS
dotenv
📡 Base URL
http://localhost:5000
Endpoint
GET: /api/classify

This endpoint accepts a name query parameter and returns processed gender prediction data.

📥 Request Format
Example:
GET: /api/classify?name=John
📤 Success Response
{
  "status": "success",
  "data": {
    "name": "John",
    "gender": "male",
    "probability": 0.99,
    "sample_size": 1234,
    "is_confident": true,
    "processed_at": "2026-04-13T18:00:00Z"
  }
}

Business Logic
gender, probability, and count are extracted from external API
count is renamed to sample_size
is_confident is:probability >= 0.7 AND sample_size >= 100
processed_at is generated dynamically in UTC (ISO 8601 format)

CORS Policy
CORS is enabled for all origins = Access-Control-Allow-Origin: *

External API Used
Gender Prediction API: https://api.genderize.io

▶How to Run Locally
1. Install dependencies
npm install
2. Start server
node server.js
3. Test endpoint
http://localhost:5000/api/classify?name=John

Folder Structure
HNG14-L0/
│
├── controllers/
│   └── dataController.js
├── routes/
│   └── dataRoute.js
├── server.js
├── package.json
├── README.md

Built as part of HNG14 Backend Track – Stage 0 Assessment.