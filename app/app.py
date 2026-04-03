import streamlit as st
import numpy as np
import pickle

model = pickle.load(open("model/heart_model.pkl", "rb"))
le = pickle.load(open("model/label_encoder.pkl", "rb"))

if "logged_in" not in st.session_state:
    st.session_state.logged_in = False


def login_page():

    col1, col2, col3 = st.columns([1,2,1])

    with col2:
        st.title("🔐 Login Page")

        username = st.text_input("Username")
        password = st.text_input("Password", type="password")

        if st.button("Login"):

            if username == "admin" and password == "1234":

                st.session_state.logged_in = True
                st.success("Login successful")
                st.rerun()

            else:
                st.error("Invalid username or password")


def prediction_page():

    st.title("❤️ Heart Disease Prediction System")

    chest_pain = st.selectbox("Chest Pain", [0,1])
    breath = st.selectbox("Shortness of Breath", [0,1])
    fatigue = st.selectbox("Fatigue", [0,1])
    heartbeat = st.selectbox("Abnormal Heartbeat", [0,1])
    dizziness = st.selectbox("Dizziness", [0,1])

    if st.button("Predict"):

        features = np.array([[chest_pain, breath, fatigue, heartbeat, dizziness]])

        prediction = model.predict(features)

        result = le.inverse_transform(prediction)

        st.success("Prediction: " + result[0])


if st.session_state.logged_in:
    prediction_page()
else:
    login_page()