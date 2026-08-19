(function () {
  const loginScreen = document.getElementById("loginScreen");
  const appScreen = document.getElementById("appScreen");
  const loginForm = document.getElementById("loginForm");
  const loginBtn = document.getElementById("loginBtn");
  const loginError = document.getElementById("loginError");
  const apiStatus = document.getElementById("apiStatus");
  const apiStatusText = apiStatus.querySelector(".api-status-text");
  const whoami = document.getElementById("whoami");
  const logoutBtn = document.getElementById("logoutBtn");

  const predictForm = document.getElementById("predictForm");
  const predictBtn = document.getElementById("predictBtn");
  const resultEmpty = document.getElementById("resultEmpty");
  const resultContent = document.getElementById("resultContent");
  const resultLabel = document.getElementById("resultLabel");
  const resultNote = document.getElementById("resultNote");
  const resetBtn = document.getElementById("resetBtn");

  const GOOD_TERMS = ["healthy", "normal", "low risk", "no disease"];

  function setLoading(btn, isLoading) {
    btn.classList.toggle("loading", isLoading);
    btn.disabled = isLoading;
  }

  async function checkApiHealth() {
    try {
      const res = await fetch(`${API_BASE_URL}/`, { method: "GET" });
      if (res.ok) {
        apiStatus.classList.add("online");
        apiStatus.classList.remove("offline");
        apiStatusText.textContent = "API online";
      } else {
        throw new Error("bad status");
      }
    } catch (err) {
      apiStatus.classList.add("offline");
      apiStatus.classList.remove("online");
      apiStatusText.textContent = "API unreachable — check API_BASE_URL in config.js";
    }
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginError.textContent = "";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      loginError.textContent = "Enter any username and password to continue.";
      return;
    }

    setLoading(loginBtn, true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Login failed");
      }

      const data = await res.json();
      sessionStorage.setItem("cardia_user", data.username);
      showApp(data.username);
    } catch (err) {
      loginError.textContent =
        err.message === "Failed to fetch"
          ? "Can't reach the API. Check API_BASE_URL in config.js and that the backend is running."
          : err.message;
    } finally {
      setLoading(loginBtn, false);
    }
  });

  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("cardia_user");
    appScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");
    loginForm.reset();
    resetResult();
  });

  function showApp(username) {
    whoami.textContent = username;
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
  }

  predictForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(predictForm);
    const payload = {
      chest_pain: formData.has("chest_pain") ? 1 : 0,
      breath: formData.has("breath") ? 1 : 0,
      fatigue: formData.has("fatigue") ? 1 : 0,
      heartbeat: formData.has("heartbeat") ? 1 : 0,
      dizziness: formData.has("dizziness") ? 1 : 0,
    };

    setLoading(predictBtn, true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Prediction failed");
      }

      const data = await res.json();
      showResult(data.prediction);
    } catch (err) {
      showResult(null, err.message);
    } finally {
      setLoading(predictBtn, false);
    }
  });

  function showResult(prediction, errorMessage) {
    resultEmpty.classList.add("hidden");
    resultContent.classList.remove("hidden");

    if (errorMessage) {
      resultLabel.textContent = "Error";
      resultLabel.className = "status-bad";
      resultNote.textContent = errorMessage;
      return;
    }

    const isGood = GOOD_TERMS.some((t) =>
      prediction.toLowerCase().includes(t)
    );
    resultLabel.textContent = prediction;
    resultLabel.className = isGood ? "status-good" : "status-bad";
    resultNote.textContent = isGood
      ? "No significant risk indicators from the selected symptoms."
      : "Model flagged possible risk based on the selected symptoms. This is a demo, not a diagnosis.";
  }

  function resetResult() {
    resultContent.classList.add("hidden");
    resultEmpty.classList.remove("hidden");
    predictForm.reset();
  }

  resetBtn.addEventListener("click", resetResult);

  // Resume session if already "logged in" this tab.
  const existingUser = sessionStorage.getItem("cardia_user");
  if (existingUser) showApp(existingUser);

  checkApiHealth();
})();
