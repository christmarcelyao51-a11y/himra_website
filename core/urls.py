# pyrefly: ignore [missing-import]
from django.urls import path, include
# pyrefly: ignore [missing-import]
from rest_framework.routers import DefaultRouter
from .views import AlbumViewSet, ConcertViewSet, VideoViewSet

# Le router de DRF génère automatiquement toutes les routes URL nécessaires
router = DefaultRouter()
router.register(r'albums', AlbumViewSet)
router.register(r'concerts', ConcertViewSet)
router.register(r'videos', VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]