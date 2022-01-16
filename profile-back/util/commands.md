### List running containers associated to the docker-compose file
docker-compose ps

### Migrate database inside container
docker exec <container_id> 'django-admin migrate --no-input'