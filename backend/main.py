from fastapi import FastAPI
from backend.schema import Job
from backend.job_search import job_search
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(CORSMiddleware,allow_origins=["http://localhost:5173"],allow_credentials=True,allow_methods=["*"],allow_headers=["*"],)

@app.get("/search", response_model=list[Job])
def search(query: str,city: str | None = None,company: str | None = None):
    result = job_search(query, city, company)
    return result.to_dict(orient="records")