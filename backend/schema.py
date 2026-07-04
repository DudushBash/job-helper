from pydantic import BaseModel

class Job(BaseModel):
    title: str
    company: str
    location: str | None = None
    experience: str | None = None
    salary: str | None = None
    key_skills: str | None = None