from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response
from django.conf import settings
from .serializers import WeatherSerializers
from .models import Weather

# 1. OpenWeatherMap API로부터 데이터 다운로드
# 2. 그대로 출력
@api_view(['GET'])
def index(request):
    api_key = "8e3175336ac28731abe363f306dd8065"
    city_name = "Seoul"
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={api_key}"
    response = requests.get(url).json()
    return Response(response)

@api_view(['GET'])
def save_data(request):
    # 1. API를 통해 데이터를 가져온다
    api_key = "8e3175336ac28731abe363f306dd8065"
    city_name = "Seoul"
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={api_key}"
    response = requests.get(url).json()
    # 2. 원하는 필드만 꺼내서
    for li in response.get('list'):
        print('li= ', li)
        dt_txt = li.get('dt_txt')
        temp = li.get('main').get('temp')
        feels_like = li.get('main').get('feels_like')
        # 3. DB에 없다면 저장한다
        # 데이터 포장 -> serializer 변환 -> 유효성검증, 저장 등 편하게 가능
        # 중복 확인갈비
        if Weather.objects.filter(dt_txt=dt_txt, temp=temp, feels_like=feels_like).exists():
            continue
        save_data = {
            'dt_txt': dt_txt,
            'temp': temp,
            'feels_like': feels_like,
        }
        serializer = WeatherSerializers(data=save_data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        
    return JsonResponse({'message' : '저장성공!'})