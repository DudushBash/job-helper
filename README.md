# Job Helper

Job Helper — это веб-приложение для интеллектуального поиска вакансий с использованием **FastAPI**, **PostgreSQL** и **TF-IDF**.

Проект предназначен для поиска наиболее подходящих вакансий по запросу пользователя и служит учебным проектом, демонстрирующим разработку полноценного backend-приложения на Python.

(The dataset is not included in this repository due to GitHub's file size limits. Place clean_jobs.csv into the data/ directory before running the application.)

---

## Возможности

* Поиск вакансий по текстовому запросу
* Ранжирование результатов с помощью TF-IDF и косинусного сходства
* Хранение вакансий в PostgreSQL
* REST API на FastAPI
* Фильтрация вакансий по параметрам (например, город и компания)
* Конфигурация через `.env`

---

## Используемые технологии

* Python
* FastAPI
* PostgreSQL
* SQLAlchemy
* Pandas
* Scikit-learn
* TF-IDF
* Uvicorn
* python-dotenv

---

## Запуск проекта

### 1. Клонировать репозиторий

```bash
git clone <repository_url>
cd job-helper
```

### 2. Создать виртуальное окружение

```bash
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Linux / macOS:

```bash
source venv/bin/activate
```

### 3. Установить зависимости

```bash
pip install -r requirements.txt
```

### 4. Создать файл `.env`

Пример:

```env
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jobs
```

### 5. Запустить сервер

```bash
uvicorn backend.main:app --reload
```

После запуска API будет доступно по адресу:

```
http://127.0.0.1:8000
```

Документация Swagger:

```
http://127.0.0.1:8000/docs
```

---

## API

### Поиск вакансий

```
GET /search
```

Пример:

```
/search?query=python
```

или

```
/search?query=python&city=Baku&company=ABB
```

Ответ:

```json
[
  {
    "title": "...",
    "company": "...",
    "experience": "...",
    "salary": "...",
    "key_skills": "..."
  }
]
```

---

## Планы по развитию

* React Frontend
* Улучшение алгоритма рекомендаций
* Авторизация пользователей
* Избранные вакансии
* История поиска

---

## Автор

Kamal
