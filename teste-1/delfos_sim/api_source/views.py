from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers.user_serializer import UserSerializer, UserSerializerInfo
import json


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
    json_result = {}
    json_data = open('./data_info/analysis.json')
    data1 = json.load(json_data)
    for index, val in enumerate(data1):
        position = index + 1
        name_var = 'var_{}'.format(position)
        json_result[position] = {'chart': {'name': name_var},
                                 'data': [val], 'table': {'var': name_var, 'sample_time': val[0], 'value': val[1]}}
    return Response(json_result)
