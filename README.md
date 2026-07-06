# 🚀 Job Helper AI

**Job Helper AI** is a full-stack job search application that helps users find relevant vacancies using natural language queries. The project combines a **FastAPI** backend with a modern **React** frontend and ranks job listings using the **TF-IDF** algorithm.

This project was created to practice full-stack development, backend architecture, REST APIs, and information retrieval techniques.

> **Note:** The dataset is not included in this repository due to GitHub's file size limits. Place `clean_jobs.csv` inside the `data/` directory before running the application. (And run model.py)

---

# Features

* job cards with detailed information
* FastAPI REST API
* TF-IDF + Cosine Similarity ranking
* SQL database integration


---

# Tech Stack

## Backend

* Python
* FastAPI
* SQLAlchemy
* PostgreSQL *(or SQLite, depending on your current setup)*
* Pandas
* Scikit-learn
* Uvicorn
* python-dotenv

## Frontend

* React
* Vite
* Axios
* Lucide React
* CSS

---

# Project Structure

```text
job-helper/
│
├── backend/
│   ├── core/
│   ├── data/
│   ├── main.py
│   ├── job_service.py
│   ├── sql_database.py
│   ├── schema.py
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.jsx
│   └── package.json
│
├── requirements.txt
└── README.md
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/job-helper.git

cd job-helper
```

---

## Backend Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jobs
```

Start the backend:

```bash
uvicorn backend.main:app --reload
```

Backend:

```
http://127.0.0.1:8000
```

Swagger documentation:

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# API

### Search Jobs

```
GET /search
```

Example:

```
/search?query=python
```

or

```
/search?query=python&city=Baku&company=ABB
```

Example response:

```json
[
  {
    "title": "Python Backend Developer",
    "company": "Example Company",
    "experience": "1-3 years",
    "salary": "$1500",
    "key_skills": "Python, FastAPI, PostgreSQL"
  }
]
```

---

# How It Works

1. The user enters a search query.
2. The React frontend sends a request to the FastAPI backend.
3. The backend searches the job database.
4. TF-IDF vectorization and cosine similarity rank the most relevant vacancies.
5. Matching jobs are returned to the frontend.
6. Results are displayed as interactive job cards.

---

# Future Improvements

* User authentication
* Saved jobs
* Search history
* Resume upload
* Semantic search with embeddings
* Machine Learning ranking model
* Docker deployment
* PostgreSQL optimization

---

# Screenshots

Add screenshots of:

* Home page
* Search interface
* Job cards
* Search results
