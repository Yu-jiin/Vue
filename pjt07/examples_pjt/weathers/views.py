from django.shortcuts import render
import requests
from rest_framework.decorators import api_view

# 1. OpenWeatherMap API로부터 데이터 다운로드
# 2. 그대로 출력
@api_view
def index(request):
    api_key = "8e3175336ac28731abe363f306dd8065"
    city_name = "Seoul,KR"
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={api_key}"
    response = request.get(url).json()
    