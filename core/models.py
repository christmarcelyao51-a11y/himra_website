# pyrefly: ignore [missing-import]
from django.db import models

# pyrefly: ignore [missing-import]
from django.db import models

# 1. Gestion des Albums, Mixtapes et EPs d'Himra
class Album(models.Model):
    PROJECT_TYPES = [
        ('ALBUM', 'Album Studio'),
        ('MIXTAPE', 'Mixtape'),
        ('EP', 'EP'),
    ]
    title = models.CharField(max_length=200, verbose_name="Titre du projet")
    release_date = models.DateField(verbose_name="Date de sortie")
    cover_image = models.ImageField(upload_to='covers/', verbose_name="Pochette / Cover")
    project_type = models.CharField(max_length=10, choices=PROJECT_TYPES, default='ALBUM', verbose_name="Type de projet")
    
    # Liens de streaming officiels
    spotify_link = models.URLField(blank=True, null=True, verbose_name="Lien Spotify")
    apple_music_link = models.URLField(blank=True, null=True, verbose_name="Lien Apple Music")
    youtube_link = models.URLField(blank=True, null=True, verbose_name="Lien YouTube (Playlist/Album)")

    class Meta:
        verbose_name = "Album / Projet"
        verbose_name_plural = "Albums / Projets"

    def __str__(self):
        return f"{self.title} ({self.get_project_type_display()})"


# 2. Les morceaux associés aux albums
class Track(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name='tracks', verbose_name="Album associé")
    title = models.CharField(max_length=200, verbose_name="Titre de la chanson")
    duration = models.CharField(max_length=10, help_text="Format MM:SS (Ex: 03:14)", verbose_name="Durée")
    track_number = models.PositiveIntegerField(verbose_name="Numéro de piste")
    featured_artists = models.CharField(max_length=200, blank=True, null=True, help_text="Ex: Leto, Gazo, Minz", verbose_name="Featuring")

    class Meta:
        ordering = ['track_number']
        verbose_name = "Piste / Chanson"
        verbose_name_plural = "Pistes / Chansons"

    def __str__(self):
        return f"{self.track_number}. {self.title}"


# 3. Gestion de la tournée et des concerts
class Concert(models.Model):
    title = models.CharField(max_length=200, help_text="Ex: Sorry I'm Bad Tour", verbose_name="Nom de l'événement")
    venue = models.CharField(max_length=200, help_text="Ex: Parc des Expositions, Bataclan", verbose_name="Salle / Lieu")
    city = models.CharField(max_length=100, verbose_name="Ville")
    country = models.CharField(max_length=100, verbose_name="Pays")
    date = models.DateTimeField(verbose_name="Date et Heure du concert")
    ticket_link = models.URLField(verbose_name="Lien de la billetterie")
    is_sold_out = models.BooleanField(default=False, verbose_name="Guichet fermé / Sold Out")

    class Meta:
        verbose_name = "Concert"
        verbose_name_plural = "Concerts"

    def __str__(self):
        return f"{self.city} ({self.venue}) - {self.date.strftime('%d/%m/%Y')}"


# 4. Galerie Vidéos (Clips YouTube)
class Video(models.Model):
    title = models.CharField(max_length=200, verbose_name="Titre du clip")
    youtube_url = models.URLField(help_text="Lien complet de la vidéo YouTube", verbose_name="URL YouTube")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Ajouté le")

    class Meta:
        verbose_name = "Clip Vidéo"
        verbose_name_plural = "Clips Vidéos"

    def __str__(self):
        return self.title
