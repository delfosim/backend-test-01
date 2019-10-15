from rest_framework import serializers
from .module_serializer import ModuleSerializer
from api_source.models import User, Role, ModuleClient, ModuleRole, Module


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class UserSerializerInfo(serializers.ModelSerializer):

    name = serializers.SerializerMethodField('_get_name')
    role = serializers.SerializerMethodField('_get_role')
    modules = serializers.SerializerMethodField('_get_modules')

    def _get_name(self, obj):
        return obj.user_name

    def _get_role(self, obj):
        try:
            obj = Role.objects.get(pk=obj.role_id)
            return obj.role_name
        except:
            return obj.role_id

    def _get_modules(self, obj):
            modules_id = ModuleClient.objects.all().filter(client_id=obj.client_id).values_list('id', flat=True)
            modules_roles_id = ModuleRole.objects.all().filter(module_id__in=modules_id, role_id=obj.role_id)
            modules = []
            for mod_role in modules_roles_id:
                serializer = ModuleSerializer(mod_role.module_id)
                modules.append(serializer.data)
            return modules

    class Meta:
        model = User
        fields = ('name', 'role', 'modules')
