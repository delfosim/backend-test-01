from rest_framework import serializers
from api_source.models import Module


class ModuleSerializer(serializers.ModelSerializer):

    description = serializers.SerializerMethodField('_get_description')

    def _get_description(self, obj):
        return obj.name

    class Meta:
        model = Module
        fields = ['id', 'description']
