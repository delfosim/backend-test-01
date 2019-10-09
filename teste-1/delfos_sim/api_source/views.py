from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers.user_serializer import UserSerializer, UserSerializerInfo
import json


# Create your views here.
@api_view(['GET'])
def list_user(request):
    users = User.objects.all()
    json_result = []
    for user in users:
        user_serializer = UserSerializerInfo(user)
        json_result.append(user_serializer.data)
    return Response(json_result)


@api_view(['GET'])
def analysis(request):
    json_data = open('./data_info/analysis.json')
    data1 = json.load(json_data)
    return Response(data1)
