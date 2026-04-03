import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

data = pd.read_excel("data/dataset.csv")

sns.countplot(x="heart_disease", data=data)

plt.title("Heart Disease Distribution")

plt.show()