from datetime import datetime, date

from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
import yaml

from data_models import Days, DayInfo

app = FastAPI()

DAY_INFO = yaml.load(open("database.yml"), Loader=yaml.FullLoader)

def active_days() -> list[int]:
    now = date(2023, 12, 24) #datetime.now() 
    if now.month != 12:
        return []
    return list(range(1, now.day + 1))

@app.get("/days")
def days() -> Days:
    order = DAY_INFO["order"]
    days = active_days()
    return {"days": [{"active": is_day_active(day, days), "id": day} for day in order]}

@app.get("/days/{day}")
def get_day(day: int) -> DayInfo:
    if not is_day_active(day, active_days()):
        return PlainTextResponse("Day is not active", status_code=401)
    return DAY_INFO["days"][day]

def is_day_active(day: int, active_days: list):
    return day in active_days



