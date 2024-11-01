from django.db import models

# Create your models here.
class Actor(models.Model):
    name = models.TextField(max_length=100)


class Movie(models.Model):
    title = models.TextField(max_length=100)
    overview = models.TextField()
    release_date = models.DateTimeField()
    poster_path = models.TextField()
    actors = models.ManyToManyField(Actor, through='MovieActor')

class MovieActor(models.Model): 
    actor = models.ForeignKey(Actor, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    title = models.TextField(max_length=100)
    content = models.TextField()

