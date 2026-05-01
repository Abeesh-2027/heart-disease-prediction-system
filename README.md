# ❤️ Smart Heart Disease Prediction System (Streamlit)

## 📌 Project Overview

The **Heart Disease Prediction System** is a Machine Learning-based web application built using **Streamlit**.
It predicts the likelihood of heart disease based on user-provided medical parameters.

This project aims to assist in **early detection and awareness**, helping users take preventive action.

## Screenshot


## login
![image alt]https://github.com/Abeesh-2027/heart-disease-prediction-system/blob/main/Screenshot%20(53).png?raw=true
## interface
![image alt]https://github.com/Abeesh-2027/heart-disease-prediction-system/blob/main/Screenshot%20(54).png?raw=true
## Result
![image alt]https://github.com/Abeesh-2027/heart-disease-prediction-system/blob/main/Screenshot%20(55).png?raw=true

## 🚀 Features

* 🔍 Heart disease prediction using a trained ML model
* 🖥️ Interactive and user-friendly web interface
* ⚡ Instant prediction results
* 📊 Simple input form for medical parameters
* 🧠 Model retraining capability

---

## 🛠️ Technologies Used

* **Python**
* **Streamlit**
* **Scikit-learn**
* **Pandas & NumPy**
* **Pickle (Model Saving)**

---

## 📂 Project Structure

```
heart_disease_project/
│
├── analysis/
│   └── visualization.py
│
├── app/
│   └── app.py
│
├── data/
│   └── dataset.csv
│
├── model/
│   ├── heart_model.pkl
│   ├── label_encoder.pkl
│   └── train_model.py
│
├── venv/
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/heart-disease-prediction.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd heart-disease-prediction
```

### 3️⃣ Create Virtual Environment

```bash
python -m venv venv
```

### 4️⃣ Activate Environment

**Windows**

```bash
venv\Scripts\activate
```

**Linux / Mac**

```bash
source venv/bin/activate
```

### 5️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Run the Application

```bash
streamlit run app/app.py
```

---

## 📊 Input Parameters

| Parameter  | Description         | Values          |
| ---------- | ------------------- | --------------- |
| chest_pain | Chest pain presence | 0 = No, 1 = Yes |
| breath     | Shortness of breath | 0 = No, 1 = Yes |
| fatigue    | Feeling tired       | 0 = No, 1 = Yes |
| heartbeat  | Irregular heartbeat | 0 = No, 1 = Yes |
| dizziness  | Dizziness           | 0 = No, 1 = Yes |

---

## 🧠 Model Training

To retrain the machine learning model:

```bash
python model/train_model.py
```

---

## 📈 Future Improvements

* 🌐 Deploy on Streamlit Cloud
* 📊 Add more datasets for better accuracy
* 🤖 Improve ML model performance
* 🔐 Add user authentication system
* 📄 Generate downloadable health reports
* 🚨 Add alert system for high-risk predictions

---

## 👨‍💻 Author

**Abeesh**

---

## 📜 License

This project is open-source and available for use and modification.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
