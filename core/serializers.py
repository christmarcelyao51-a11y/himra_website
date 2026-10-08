# pyrefly: ignore [missing-import]
from rest_framework import serializers
from .models import Album, Track, Concert, Video

# Serializer pour les morceaux
class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ['id', 'title', 'duration', 'track_number', 'featured_artists']

# Serializer pour les albums (il va inclure automatiquement la liste des morceaux)
class AlbumSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = ['id', 'title', 'release_date', 'cover_image', 'project_type', 'spotify_link', 'apple_music_link', 'youtube_link', 'tracks']

# Serializer pour les concerts
class ConcertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Concert
        fields = ['id', 'title', 'venue', 'city', 'country', 'date', 'ticket_link', 'is_sold_out']

# Serializer pour les clips vidéos
class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'title', 'youtube_url', 'created_at']