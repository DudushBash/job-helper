import os
import joblib
import pandas as pd
from scipy.sparse import load_npz
from sklearn.metrics.pairwise import cosine_similarity

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "model")
vectorizer = joblib.load(os.path.join(MODEL_DIR, "vectorizer.pkl"))
tfidf_matrix = load_npz(os.path.join(MODEL_DIR, "tfidf_matrix.npz"))
df = pd.read_pickle(os.path.join(MODEL_DIR, "jobs.pkl"))

def job_search(query, location=None, company=None):
    query_vector = vectorizer.transform([query])
    scores = cosine_similarity(query_vector,tfidf_matrix).flatten()
    top_idx = scores.argsort()[::-1][:10]
    result = df.iloc[top_idx]
    if location:
        result = result[result["city"].fillna("").str.contains(location,case=False)]
    if company:
        result = result[result["company"].fillna("").str.contains(company,case=False)]
    return result[["title","company","experience","salary","key_skills",]]