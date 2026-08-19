import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

data = pd.read_csv("data/dataset.csv")

le = LabelEncoder()
data["heart_disease"] = le.fit_transform(data["heart_disease"])

X = data.drop("heart_disease", axis=1)
y = data["heart_disease"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = RandomForestClassifier()
model.fit(X_train, y_train)

pickle.dump(model, open("model/heart_model.pkl", "wb"))
pickle.dump(le, open("model/label_encoder.pkl", "wb"))

print("Model trained successfully")