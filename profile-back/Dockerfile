# pull official base image
FROM python:3.8.3-alpine

EXPOSE 8000

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# copy project
COPY . .

# install dependencies
RUN apk update \
    && pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements/development.txt \
    && python -m compileall . \
    && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app/app

# production like environment
# CMD ["gunicorn", "conf.wsgi:application", "--bind", "0.0.0.0:8000"]

# develop like environment
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]