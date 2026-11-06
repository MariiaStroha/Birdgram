from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status

from serializers import userSerializer

def register(request):
    serializer = userSerializer(data = request.data)
    if serializer.is_valid():
        user = User.objects.create_user(serializer)
        user.save() 
        return Response(status=status.HTTP_201_CREATED)
# need to return the data if you want an auto login