from django.db import models

# Create your models here.
class Diary(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=100)
    content = models.TextField()
    mood = models.ImageField(upload_to='mood/')
    
class Comment(models.Model):
    diary = models.ForeignKey(Diary, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Like(models.Model):
    diary = models.ForeignKey(Diary, related_name='likes', on_delete=models.CASCADE)
    