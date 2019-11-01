from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.response import Response

from .models import *
from .serializers import *
from django.http import JsonResponse


import json


class ClientList(generics.ListCreateAPIView):

    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class RoleList(generics.ListCreateAPIView):

    queryset = Role.objects.all()
    serializer_class = RoleSerializer


class GroupList(generics.ListCreateAPIView):

    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class UserList(generics.ListCreateAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        data_list = []

        c = Client.objects.get(pk = 2015)

        print (c.module_set.all())

        for i in range(len(serializer.data)):
            c = Client.objects.get(pk = serializer.data[i]['client_id'])
            data = {
                    "name": serializer.data[i]['user_name'],
                    "role": Role.objects.get(pk = serializer.data[i]['role_id']).role_name,
                    "modules": [{"id": module.id, "description": module.name}
                                    for module in c.module_set.all()]

                }
            
            data_list.append(data)
        return Response(data_list)


class ModuleList(generics.ListCreateAPIView):

    queryset = Module.objects.all()
    serializer_class = ModuleSerializer



class TimeSeriesList(generics.ListCreateAPIView):

    queryset = TimeSeries.objects.all()
    serializer_class = TimeSeriesSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        data_list = []
        for i in range(len(serializer.data)):
            data_analysis = json.loads(serializer.data[i]['analysis'])
            data = {
                i+1: {
                    "chart": [
                        {
                            "name": serializer.data[i]['name'],
                            "data": data_analysis
                        }
                    ],
                    "table": [{"var": serializer.data[i]['name'], "sample_time": line[0], "value": line[1]} 
                                for line in data_analysis]
                }
            }
            data_list.append(data)
        return Response(data_list)

class TimeSeriesRetrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = TimeSeries.objects.all()
    serializer_class = TimeSeriesSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        # print(serializer.data)

        data_analysis = json.loads(serializer.data['analysis'])

        data = {
            1: {
                "chart": [
                    {
                        "name": serializer.data['name'],
                        "data": data_analysis
                    }
                ],
                "table": [{"var": serializer.data['name'], "sample_time": line[0], "value": line[1]} 
                            for line in data_analysis]
            }
        }
        return Response(data)