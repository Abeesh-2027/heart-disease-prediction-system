import os
import pickle
import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model = pickle.load(open(os.path.join(BASE_DIR, "model", "heart_model.pkl"), "rb"))
le = pickle.load(open(os.path.join(BASE_DIR, "model", "label_encoder.pkl"), "rb"))

app = FastAPI(title="Heart Disease Prediction API")

# Allow the Vercel frontend (and local dev) to call this API.
# You can restrict this to your exact Vercel domain after deploying.
ALLOWED_ORIGINS = os.environ.get("ALLOWED_ORIGINS", "*")
origins = ["*"] if ALLOWED_ORIGINS == "*" else [o.strip() for o in ALLOWED_ORIGINS.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class LoginRequest(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)


class PredictRequest(BaseModel):
    chest_pain: int
    breath: int
    fatigue: int
    heartbeat: int
    dizziness: int


@app.get("/")
def health():
    return {"status": "ok", "service": "heart-disease-prediction-api"}


@app.post("/api/login")
def login(payload: LoginRequest):
    # Demo auth: any non-empty username + password is accepted.
    username = payload.username.strip()
    password = payload.password.strip()
    if not username or not password:
        raise HTTPException(status_code=401, detail="Username and password are required")
    return {"success": True, "username": username}


@app.post("/api/predict")
def predict(payload: PredictRequest):
    for name, value in payload.dict().items():
        if value not in (0, 1):
            raise HTTPException(status_code=400, detail=f"{name} must be 0 or 1")

    features = np.array(
        [[
            payload.chest_pain,
            payload.breath,
            payload.fatigue,
            payload.heartbeat,
            payload.dizziness,
        ]]
    )
    prediction = model.predict(features)
    result = le.inverse_transform(prediction)
    return {"prediction": result[0]}
