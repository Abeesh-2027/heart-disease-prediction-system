Heart Disease Prediction System (Streamlit)

Project Overview

This project is a Heart Disease Prediction Web App built using Streamlit and Machine Learning.
The app predicts whether a person has heart disease based on medical parameters.

🚀 Features

- Heart disease prediction using trained ML model
- Interactive web interface using Streamlit
- Simple user input form
- Fast predictions

🛠️ Technologies Used

- Python
- Streamlit
- Scikit-learn

📂 Project Structure

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

⚙️ Installation

1️⃣ Clone repository

git clone https://github.com/yourusername/heart-disease-prediction.git

2️⃣ Go to project folder

cd heart-disease-prediction

3️⃣ Create virtual environment

python -m venv venv

4️⃣ Activate environment

Windows

venv\Scripts\activate

Linux/Mac

source venv/bin/activate

5️⃣ Install requirements

pip install -r requirements.txt

▶️ Run Streamlit App

streamlit run app/app.py

📊 Input Parameters

chest_pain → (0 = No, 1 = Yes)
breath (shortness of breath) → (0 = No, 1 = Yes)
fatigue → (0 = No, 1 = Yes)
heartbeat (irregular heartbeat) → (0 = No, 1 = Yes)
dizziness → (0 = No, 1 = Yes)

🧠 Model Training

To retrain model:

python model/train_model.py

🌐 Future Improvements

- Deploy on Streamlit Cloud
- Add more datasets
- Improve model accuracy
- Add user authentication

👨‍💻 Author

Abeesh

📜 License

This project is open source. 




