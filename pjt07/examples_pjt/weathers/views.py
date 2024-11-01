from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
# from django.http import JsonResponse
from rest_framework.response import Response
from django.conf import settings



# 1. OpenWeatherMap API로부터 데이터 다운로드
# 2. 그대로 출력
@api_view(['GET'])
def index(request):
    api_key = settings.API_KEY
    city_name = "Seoul"
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={api_key}"
    response = requests.get(url).json()
    return Response(response)