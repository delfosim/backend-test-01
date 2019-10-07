from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers.user_serializer import UserSerializer


# Create your views here.
@api_view(['GET'])
def list_user(request):
    users = User.objects.all()
    json_result = {'result': []}
    for user in users:
        user_serializer = UserSerializer(user)
        json_result['result'].append(user_serializer.data)
    return Response(json_result)
