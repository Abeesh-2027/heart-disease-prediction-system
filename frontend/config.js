const RENDER_API_URL = "https://heart-disease-prediction-system-2-9fbp.onrender.com";
const LOCAL_API_URL = "http://127.0.0.1:8000";

const isLocal = ["localhost", "127.0.0.1", ""].includes(window.location.hostname);
const API_BASE_URL = isLocal ? LOCAL_API_URL : RENDER_API_URL;
