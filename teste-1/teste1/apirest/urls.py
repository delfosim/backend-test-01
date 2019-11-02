from django.urls import path
from . import views

from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Desafio Delfos: API')

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user-list'),
    path('analysis/', views.TimeSeriesList.as_view(), name='timeseries-list'),
    path('analysis/<int:pk>/', views.TimeSeriesRetrieve.as_view(), name='timeseries-retrieve'),
    path('clients/', views.ClientList.as_view(), name='user-list'),
    path('roles/', views.RoleList.as_view(), name='user-list'),
    path('groups/', views.GroupList.as_view(), name='user-list'),
    path('modules/', views.ModuleList.as_view(), name='user-list'),
    path('', schema_view),
]