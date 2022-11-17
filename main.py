'''
https://fastapi.tiangolo.com/tutorial/#install-fastapi

Installing:
>>pip install fastapi
>>pip install "uvicorn[standard]"

Open a terminal:
uvicorn main:app --reload
'''

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
app = FastAPI(title="my app root")

# @app.get("/portfolio/{_:path")
# def get_resource(request):

# app = Starlette(routes=routes)
# app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/", StaticFiles(directory="./public", html=True), name="public")
app.mount("/portfolio", StaticFiles(directory="./public/portfolio", html=True), name="portfolio")
# app.mount("/portfolio", StaticFiles(directory="./public/portfolio", html=True), name="frontend")


