import requests
import json

from conf import settings
from rest_framework.request import Request
from rest_framework.serializers import ValidationError

from conf.settings import SessionManager

class ProfileTorreRepository:

    def __init__(self):
        self.host = settings.HOST

    def retrieve_profile(self, username: str):
        profile_endpoint = f"/bios/{username}"
        session = SessionManager().get()
        request = {}
        response = session.get(
            f"{self.host}{profile_endpoint}",
            headers={
                "content-type": "application/json",
            }
        )
        
        if response.status_code != 200:
            raise ValidationError(response.json())
        else:
            profile = response.json()
            print(profile)
            return profile