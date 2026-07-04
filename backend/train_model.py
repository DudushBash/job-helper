import os
import joblib
import pandas as pd
from scipy.sparse import save_npz
from sklearn.feature_extraction.text import TfidfVectorizer
from backend.sql_database import engine

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "model")
os.makedirs(MODEL_DIR, exist_ok=True)
df = pd.read_sql("SELECT * FROM jobs", engine)
df["search"] = (df["title"].fillna("")+ " "+ df["key_skills"].fillna("")+ " "+ df["description"].fillna(""))
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(df["search"])
joblib.dump(vectorizer, os.path.join(MODEL_DIR, "vectorizer.pkl"))
save_npz(os.path.join(MODEL_DIR, "tfidf_matrix.npz"), tfidf_matrix)
df.to_pickle(os.path.join(MODEL_DIR, "jobs.pkl"))