from . import views
from django.urls import path

app_name = 'weathers'
urlpatterns = [
    path('', views.index, name='index'),
]
