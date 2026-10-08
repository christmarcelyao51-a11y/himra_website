# pyrefly: ignore [missing-import]
from django.shortcuts import render

# core/views.py

# pyrefly: ignore [missing-import]
from rest_framework import viewsets
from .models import Album, Concert, Video
from .serializers import AlbumSerializer, ConcertSerializer, VideoSerializer

# Assure-toi que le nom est bien orthographié ici : AlbumViewSet
class AlbumViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Album.objects.all().order_by('-release_date')
    serializer_class = AlbumSerializer

class ConcertViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Concert.objects.all().order_by('date')
    serializer_class = ConcertSerializer

class VideoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Video.objects.all().order_by('-created_at')
    serializer_class = VideoSerializer