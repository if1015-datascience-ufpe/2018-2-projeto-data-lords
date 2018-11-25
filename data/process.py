import pandas as pd

df = pd.read_csv('acidentes-2016.csv', delimiter=';')

df.to_csv('new-acidentes-2016.csv', index=False)