# Cardia — Heart Disease Screening (Full-Stack Rebuild)

Your original project was a single Streamlit script with a hardcoded login
(`admin` / `1234`). It's been rebuilt as a proper **frontend + backend** app so
it can be deployed the way you asked — backend on **Render**, frontend on
**Vercel**, connected together as a live portfolio project.

```
build/
├── backend/          FastAPI API (deploy this to Render)
│   ├── main.py
│   ├── requirements.txt
│   ├── render.yaml
│   └── model/
│       ├── heart_model.pkl
│       └── label_encoder.pkl
└── frontend/          Static site (deploy this to Vercel)
    ├── index.html
    ├── style.css
    ├── script.js
    ├── config.js       ← you edit ONE line here after backend is live
    └── vercel.json
```

**What changed from the original:**
- **Login** now accepts *any* non-empty username + password (no more hardcoded `admin`/`1234`) — checked by the backend, not the frontend, so it can't be bypassed by viewing page source.
- **Fully responsive UI** — tested down to a 360px-wide phone screen (breakpoints in `style.css`).
- **Split into two deployable pieces**: a FastAPI JSON API (backend) and a static HTML/CSS/JS site (frontend) that calls it — this is what lets you host one on Render and one on Vercel.

I can't push to Render/Vercel on your behalf (that needs your own accounts), but everything below is copy-paste — about 10 minutes total.

---

## Step 1 — Push this code to GitHub

1. Create a new GitHub repo (e.g. `cardia-heart-screening`).
2. Copy the entire `build/` folder contents into it (both `backend/` and `frontend/` at the repo root, or as subfolders — either works, just note the path when configuring Render/Vercel below).
3. Commit and push.

## Step 2 — Deploy the backend to Render

1. Go to [render.com](https://render.com) → **New** → **Web Service** → connect your GitHub repo.
2. If `backend/` is a subfolder, set **Root Directory** to `backend`.
3. Settings:
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Instance Type**: Free
4. Click **Create Web Service**. Render will give you a live URL like:
   `https://cardia-api.onrender.com`
5. Visit that URL — you should see `{"status":"ok",...}`.

   *(A `render.yaml` is included if you prefer Render's "Blueprint" one-click setup instead of manual settings.)*

   Note: on Render's free tier the service sleeps after inactivity, so the first request after idling can take ~30–50 seconds to wake up. That's normal.

## Step 3 — Point the frontend at your backend

Open `frontend/config.js` and change the one line:

```js
const API_BASE_URL = "https://cardia-api.onrender.com"; // your Render URL, no trailing slash
```

Commit and push that change.

## Step 4 — Deploy the frontend to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import the same GitHub repo.
2. If `frontend/` is a subfolder, set **Root Directory** to `frontend`.
3. **Framework Preset**: "Other" (it's plain static HTML/CSS/JS — no build step needed).
4. Click **Deploy**. You'll get a live URL like:
   `https://cardia-heart-screening.vercel.app`

## Step 5 — Connect them (CORS)

By default the backend's `render.yaml` sets `ALLOWED_ORIGINS=*`, so it already accepts requests from your Vercel domain — no extra step needed.

To lock it down later (recommended once it's live): in Render, go to your service → **Environment** → set:
```
ALLOWED_ORIGINS = https://cardia-heart-screening.vercel.app
```
and redeploy.

## Step 6 — Test the live link

Open your Vercel URL on your phone and on desktop:
- Log in with literally any username/password.
- Toggle a few symptoms, click **Run Screening** — you should see a live prediction come back from the Render API.

That Vercel URL is your shareable, live portfolio link.

---

## Running it locally first (optional, recommended)

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**Frontend** (in a second terminal):
```bash
cd frontend
python3 -m http.server 5500
```
Open `http://localhost:5500` — `config.js` already points at `http://127.0.0.1:8000` by default, so login/prediction will work against your local backend immediately.

---

## API reference

| Method | Path            | Body                                                              | Response                          |
|--------|-----------------|--------------------------------------------------------------------|------------------------------------|
| GET    | `/`             | —                                                                   | `{status, service}`               |
| POST   | `/api/login`    | `{"username": "...", "password": "..."}`                          | `{"success": true, "username": "..."}` |
| POST   | `/api/predict`  | `{"chest_pain":0/1,"breath":0/1,"fatigue":0/1,"heartbeat":0/1,"dizziness":0/1}` | `{"prediction": "Healthy" \| "Arrhythmia" \| ...}` |

## Notes

- The trained model (`heart_model.pkl`) and label encoder are unchanged from your original project — same RandomForest model, same 5 binary symptom inputs.
- The original `model/train_model.py`, `data/dataset.csv`, and `analysis/visualization.py` weren't part of the live app, so they weren't ported into `backend/`/`frontend/` — copy them into the repo too if you want them alongside the deployable code for reference.
- This demo login is intentionally open (any credentials work) as you requested. If you ever want *real* authentication (hashed passwords, a user database, JWT sessions), that's a separate, larger change — just ask.
