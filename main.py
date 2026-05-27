import pandas as pd
from sklearn.ensemble import RandomForestClassifier

# 1. Dummy Data Generator (Replace this with real API fetch later)
def get_latest_data():
    # In reality, you'd use requests.get() to hit the NGX API here
    return pd.DataFrame({
        'Symbol': ['DANGCEM', 'ZENITHBANK', 'GTCO'],
        'Price': [350, 35, 42],
        'Signal': ['BUY', 'HOLD', 'BUY'],
        'Confidence': ['82%', '45%', '78%'],
        'Date': ['2026-05-27', '2026-05-27', '2026-05-27']
    })

# 2. Logic to update the file
def update_predictions():
    df = get_latest_data()
    # Save the dataframe to the same data.csv your app uses
    df.to_csv('data.csv', index=False)
    print("data.csv updated successfully!")

if __name__ == "__main__":
    update_predictions()