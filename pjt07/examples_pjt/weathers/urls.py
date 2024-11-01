from . import views
from django.urls import path

app_name = 'weathers'
urlpatterns = [
    path('', views.index, name='index'),
    path('save-data/', views.save_data, name='save_data'),
]
