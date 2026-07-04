from sqlalchemy import create_engine
import pandas as pd
import os
from backend.core.config import DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(BASE_DIR, "..", "data", "clean_jobs.csv")
engine = create_engine(f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}")  


