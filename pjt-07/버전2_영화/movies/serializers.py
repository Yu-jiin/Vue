from rest_framework import serializers
from .models import Movie, Actor, Review

class ActorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = '__all__'

class MovieTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title',)

class ActorSerializer(serializers.ModelSerializer):
    movies = MovieTitleSerializer(many=True, source='movie_set')

    class Meta:
        model = Actor
        fields = '__all__'

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title', 'overview',)


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('title', 'content')

class MovieSerializer(serializers.ModelSerializer):
    actors = ActorListSerializer(many=True, read_only=True)
    review_set = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'

class ReviewDetailSerializer(serializers.ModelSerializer):
    movie = MovieTitleSerializer(read_only=True)
    class Meta:
        model = Review
        fields = '__all__'
