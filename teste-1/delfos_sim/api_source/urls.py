from django.urls import path
from .views import list_user, analysis

urlpatterns = [
    path('list/user', list_user, name='list_user'),
    path('analysis', analysis, name='analisys')
]
