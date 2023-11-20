FROM python:3.11-slim

RUN pip install --upgrade pip
COPY . .
RUN pip install -r requirements.txt

CMD uvicorn app:app --port 8000 --host 0.0.0.0