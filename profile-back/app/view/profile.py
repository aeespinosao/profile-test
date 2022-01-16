from xml.dom import ValidationErr
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from http_response.http_response import HttpResponse
from django.conf import settings

from repository.profile import ProfileTorreRepository
from use_case.profile import RetrieveRepositoryUseCase

class ProfileView(APIView):

    def get(self, request: Request, username: str):
        status = self.__validate_param(username)
        if status:
            return status
        profile_repository = ProfileTorreRepository()
        retrieve_repository_use_case = RetrieveRepositoryUseCase(profile_repository)
        profile = retrieve_repository_use_case.execute(username)
        return HttpResponse.Success(profile)
    
    def __validate_param(self, username: str):
        return HttpResponse.BadRequest("BlankParam", "username can not be blank") if username == "" else None
