
from rest_framework import viewsets
from .models import Diary
from .serializers import DiarySerializer
from rest_framework.parsers import MultiPartParser, FormParser

class DiaryViewSet(viewsets.ModelViewSet):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer
    parser_classes = (MultiPartParser, FormParser)  # 이미지 파일 처리를 위해 추가

