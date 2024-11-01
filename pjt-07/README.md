# pjt-07

## 나홀로 프로젝트 START


+ 어려웠던 점
  + 간만에 restframework를 쓰려니 복습 안한 죄로 고생 좀 했습니다.
  + 다대다 model 너어무 어렵다.. 공부를 해야할 것 같다. 

+ 새로배운 점 
  + 복습의 중요성을 알았음
  + 영화 검색에 대해 공부하며 query 받아오는 방법을 알게됨 
  + model 다대다가 조금 아리까리했는데 이번 프로젝트를 계기로 확실히 알게되었다


#### 영화 검색 views.py
```
from django.db.models import Q
@api_view(['GET'])
def search(request):
    query = request.GET.get('q')
    if query:
        movies = Movie.objects.filter(
            Q(title__icontains=query) | Q(overview__icontains=query)
        )
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({'message' : '검색어를 입력해주세요'}, status=status.HTTP_400_BAD_REQUEST)
```