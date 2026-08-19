# ❤️ Cardia --- Heart Disease Screening System

Cardia is a full-stack heart disease screening application that uses a
machine learning model to predict possible heart-related conditions
based on user symptoms.

> **Educational project:** This application is for demonstration and
> learning purposes only. Its predictions are not a medical diagnosis.

------------------------------------------------------------------------
## LoginPage

![image alt](https://github.com/Abeesh-2027/heart-disease-prediction-system/blob/e04b03ceb72b56031338259c6416b9cc6cb270cd/Screenshot%202026-08-19%20161215.png)

## InterFace

![image alt](https://github.com/Abeesh-2027/heart-disease-prediction-system/blob/4f0794341cdb806bf8c8adab31426ba96103489e/Screenshot%202026-08-19%20161248.png)

## Output

![image alt](https://github.com/Abeesh-2027/heart-disease-prediction-system/blob/853a28ba515eb93ac6863bfd53060ddb768d9c18/Screenshot%202026-08-19%20161323.png)

---

## 🚀 Project Overview

Cardia is divided into two main parts:

-   **Frontend** --- HTML, CSS, and JavaScript, deployed on Vercel
-   **Backend** --- Python, FastAPI, and Machine Learning, deployed on
    Render

``` text
                    USER
                      │
                      ▼
              ┌───────────────┐
              │   FRONTEND    │
              │ HTML / CSS /  │
              │ JavaScript    │
              │    Vercel     │
              └───────┬───────┘
                      │
                   HTTP API
                      │
                      ▼
              ┌───────────────┐
              │    BACKEND    │
              │    FastAPI    │
              │    Render     │
              └───────┬───────┘
                      │
                      ▼
              ┌───────────────┐
              │  ML MODEL     │
              │ Random Forest │
              │ heart_model   │
              └───────┬───────┘
                      │
                      ▼
                  PREDICTION
                      │
                      ▼
                   FRONTEND
```

------------------------------------------------------------------------

## 📁 Project Structure

``` text
heart-disease-prediction-system/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── render.yaml
│   ├── runtime.txt
│   │
│   └── model/
│       ├── heart_model.pkl
│       └── label_encoder.pkl
│
└── frontend/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── config.js
    └── vercel.json
```

------------------------------------------------------------------------

## 🧩 Technologies Used

### Frontend

-   HTML5
-   CSS3
-   JavaScript
-   Responsive Design

### Backend

-   Python
-   FastAPI
-   Uvicorn
-   Pydantic

### Machine Learning

-   Scikit-learn
-   Random Forest
-   Pickle
-   Label Encoder

### Deployment

-   GitHub --- Source Code
-   Render --- Backend/API
-   Vercel --- Frontend

------------------------------------------------------------------------

## 🖥️ Frontend

The frontend is the part of the application that users interact with.

It provides:

-   Login page
-   Symptom selection
-   Screening button
-   Prediction result
-   Responsive design for desktop and mobile

### Frontend Files

  File            Purpose
  --------------- --------------------------------------
  `index.html`    Website structure
  `style.css`     Website design and responsive layout
  `script.js`     User interactions and API requests
  `config.js`     Backend API URL
  `vercel.json`   Vercel configuration

------------------------------------------------------------------------

## ⚙️ Backend

The backend is built using **FastAPI**.

It handles:

-   Login requests
-   Prediction requests
-   Machine learning model loading
-   Processing symptoms
-   Returning prediction results
-   CORS configuration

Main backend file:

``` text
backend/main.py
```

------------------------------------------------------------------------

## 🤖 Machine Learning Model

The application uses a trained **Random Forest** machine learning model.

### Model Files

``` text
backend/model/heart_model.pkl
backend/model/label_encoder.pkl
```

### Model Inputs

The model uses five binary symptom inputs:

  Symptom             Value
  ------------------- ------------
  Chest Pain          `0` or `1`
  Breathing Problem   `0` or `1`
  Fatigue             `0` or `1`
  Heartbeat Problem   `0` or `1`
  Dizziness           `0` or `1`

Where:

``` text
0 = No
1 = Yes
```

### Example Input

``` json
{
  "chest_pain": 1,
  "breath": 0,
  "fatigue": 1,
  "heartbeat": 0,
  "dizziness": 1
}
```

The backend passes these values to the trained model and returns the
prediction.

------------------------------------------------------------------------

## 🔐 Login System

The original project used a hardcoded login:

``` text
Username: admin
Password: 1234
```

The rebuilt version removes the hardcoded credentials.

The demo backend accepts any **non-empty username and password**.

Example:

``` text
Username: Abeesh
Password: mypassword
```

The frontend sends the request to:

``` text
POST /api/login
```

Example request:

``` json
{
  "username": "Abeesh",
  "password": "mypassword"
}
```

Example response:

``` json
{
  "success": true,
  "username": "Abeesh"
}
```

> **Note:** This is a demonstration login system, not production-grade
> authentication. A real application should use password hashing, a
> database, JWT/session management, and proper user management.

------------------------------------------------------------------------

# 🔌 API Endpoints

## `GET /`

Checks whether the backend is running.

### Response

``` json
{
  "status": "ok",
  "service": "Cardia API"
}
```

------------------------------------------------------------------------

## `POST /api/login`

Handles user login.

### Request

``` json
{
  "username": "Abeesh",
  "password": "12345"
}
```

### Response

``` json
{
  "success": true,
  "username": "Abeesh"
}
```

------------------------------------------------------------------------

## `POST /api/predict`

Runs the machine learning prediction.

### Request

``` json
{
  "chest_pain": 1,
  "breath": 0,
  "fatigue": 1,
  "heartbeat": 0,
  "dizziness": 1
}
```

### Response

``` json
{
  "prediction": "Healthy"
}
```

------------------------------------------------------------------------

# 🔄 How the Application Works

``` text
1. User opens the website
            ↓
2. User enters username and password
            ↓
3. Frontend sends login request
            ↓
4. FastAPI backend validates the login
            ↓
5. User selects symptoms
            ↓
6. Frontend sends symptoms to /api/predict
            ↓
7. FastAPI receives the symptoms
            ↓
8. Backend passes symptoms to the ML model
            ↓
9. ML model generates a prediction
            ↓
10. Backend returns a JSON response
            ↓
11. Frontend displays the prediction
```

------------------------------------------------------------------------

# 🌐 Deployment

The application uses two hosting platforms:

``` text
GitHub
  │
  ├──────────────┐
  ▼              ▼
Render          Vercel
  │              │
Backend        Frontend
FastAPI        HTML/CSS/JS
```

------------------------------------------------------------------------

## ☁️ Deploy Backend to Render

### 1. Push the Project to GitHub

Create a GitHub repository and push the project:

``` text
heart-disease-prediction-system/
├── backend/
└── frontend/
```

### 2. Create a Render Web Service

In Render:

``` text
New → Web Service
```

Connect your GitHub repository.

### Root Directory

If `backend` is a subfolder:

``` text
backend
```

### Build Command

``` bash
pip install -r requirements.txt
```

### Start Command

``` bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

### Python Version

Set this environment variable in Render:

``` text
PYTHON_VERSION=3.13.7
```

This helps avoid compatibility issues with packages such as
`pydantic-core`.

------------------------------------------------------------------------

## 🔗 Connect the Frontend to the Backend

After deploying the backend, Render will provide a URL similar to:

``` text
https://your-backend.onrender.com
```

Open:

``` text
frontend/config.js
```

Change the API URL:

``` javascript
const API_BASE_URL = "http://127.0.0.1:8000";
```

to:

``` javascript
const API_BASE_URL = "https://your-backend.onrender.com";
```

Replace the URL with your actual Render URL.

> Do not add a trailing `/`.

------------------------------------------------------------------------

## ▲ Deploy Frontend to Vercel

Go to Vercel:

``` text
Add New → Project
```

Import the same GitHub repository.

If the frontend is inside the `frontend` folder, set:

``` text
Root Directory: frontend
```

Because this is a static website:

``` text
Framework Preset: Other
```

No build command is required.

Click **Deploy**.

Vercel will provide a URL similar to:

``` text
https://your-frontend.vercel.app
```

------------------------------------------------------------------------

# 🔐 CORS Configuration

CORS allows the Vercel frontend to communicate with the Render backend.

For development, you can use:

``` text
ALLOWED_ORIGINS=*
```

For production, it is recommended to allow only your Vercel domain:

``` text
ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

------------------------------------------------------------------------

# 🧪 Run Locally

## Backend

Open a terminal:

``` bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Backend URL:

``` text
http://127.0.0.1:8000
```

------------------------------------------------------------------------

## Frontend

Open another terminal:

``` bash
cd frontend
python -m http.server 5500
```

Open:

``` text
http://localhost:5500
```

The frontend should communicate with:

``` text
http://127.0.0.1:8000
```

------------------------------------------------------------------------

# 📚 Important Files to Study

If you are learning this project, focus on these files first:

### `frontend/index.html`

Contains the structure of the website.

### `frontend/style.css`

Controls:

-   Colors
-   Fonts
-   Spacing
-   Layout
-   Responsive design

### `frontend/script.js`

Handles:

-   Button clicks
-   Login
-   API requests
-   Sending symptoms
-   Displaying prediction results

### `frontend/config.js`

Contains the backend URL:

``` javascript
const API_BASE_URL = "https://your-backend.onrender.com";
```

### `backend/main.py`

The main FastAPI application.

The basic flow is:

``` text
Request
   ↓
Validate data
   ↓
Process symptoms
   ↓
Load ML model
   ↓
Make prediction
   ↓
Return JSON
```

### `heart_model.pkl`

Contains the trained machine learning model.

### `label_encoder.pkl`

Converts model output into readable labels.

------------------------------------------------------------------------

# 🎯 Project Features

-   Full-stack architecture
-   FastAPI REST API
-   Machine learning prediction
-   Random Forest model
-   Responsive frontend
-   Backend-based demo login
-   REST API communication
-   CORS support
-   GitHub integration
-   Render deployment
-   Vercel deployment
-   Mobile-friendly interface

------------------------------------------------------------------------

# 🧠 Quick Study Summary

``` text
Cardia
│
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│       ↓
│     Vercel
│
├── Backend
│   ├── Python
│   ├── FastAPI
│   └── Uvicorn
│       ↓
│     Render
│
└── Machine Learning
    ├── Random Forest
    ├── heart_model.pkl
    └── label_encoder.pkl
```

### Main Data Flow

``` text
User
 ↓
Frontend
 ↓
REST API
 ↓
FastAPI Backend
 ↓
Machine Learning Model
 ↓
Prediction
 ↓
JSON Response
 ↓
Frontend
 ↓
User
```

------------------------------------------------------------------------

# 🩺 Disclaimer

This project is intended for **educational and demonstration purposes
only**.

The prediction generated by the machine learning model should **not be
considered a medical diagnosis**.

Users should consult a qualified healthcare professional for actual
medical evaluation.

------------------------------------------------------------------------

## 👨‍💻 Author

**Abeesh-2027**

GitHub:

``` text
https://github.com/Abeesh-2027
```
