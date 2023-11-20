from typing import Optional
from pydantic import BaseModel


class DayInfo(BaseModel):
    title: str
    text: str
    img: Optional[str] = None

class DayActive(BaseModel):
    active: bool
    id: int

class Days(BaseModel):
    days: list[DayActive]

