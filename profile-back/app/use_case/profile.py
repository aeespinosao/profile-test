from repository.profile import ProfileTorreRepository

class RetrieveRepositoryUseCase:
    def __init__(self, profile_repository: ProfileTorreRepository):
        self.__profile_repository = profile_repository
    
    def execute(self, username: str):
        profile = self.__profile_repository.retrieve_profile(username)
        return profile