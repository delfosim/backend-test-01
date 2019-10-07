from django.contrib import admin
from .models import Client,Role, User, Group, Module, ModuleClient, ModuleRole

MODELS = [Client, Role, User, Group, Module, ModuleClient, ModuleRole]

admin.site.register(MODELS)
