# pyrefly: ignore [missing-import]
from django.contrib import admin

# pyrefly: ignore [missing-import]
from django.contrib import admin
from .models import Album, Track, Concert, Video

# Permet d'ajouter des chansons directement lorsqu'on crée un Album
class TrackInline(admin.TabularInline):
    model = Track
    extra = 3 # Affiche 3 lignes vides par défaut pour aller vite

@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ('title', 'project_type', 'release_date')
    list_filter = ('project_type',)
    search_fields = ('title',)
    inlines = [TrackInline]

@admin.register(Concert)
class ConcertAdmin(admin.ModelAdmin):
    list_display = ('city', 'venue', 'date', 'is_sold_out')
    list_filter = ('country', 'is_sold_out')
    search_fields = ('city', 'venue', 'title')

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title',)