# ❤️ Cardia — Heart Disease Screening System

Cardia is a full-stack heart disease screening application that uses a machine learning model to predict possible heart-related conditions based on user symptoms.

The project is divided into two parts:

- **Frontend** → HTML, CSS, JavaScript → deployed on **Vercel**
- **Backend** → Python, FastAPI, Machine Learning → deployed on **Render**

---

## 🚀 Project Overview

```text
                    USER
                      │
                      ▼
              ┌───────────────┐
              │   FRONTEND    │
              │ HTML/CSS/JS   │
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
