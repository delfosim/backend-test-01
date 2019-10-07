from django.urls import path
from .views import list_user

urlpatterns = [
    path('list/user', list_user, name='list_user')
]
