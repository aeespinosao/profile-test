# Dockerfile
FROM node:14.17

# Agregamos un usuario
#RUN useradd --user-group --create-home --shell /bin/false app

# Locate workdri
WORKDIR /usr/src/app

# Copy the project in container
COPY . .

# Install angular-cli
RUN npm install -g @angular/cli && npm cache clean

# Install dependencies 
RUN npm install && npm cache clean

# Expose ports
EXPOSE 4200
EXPOSE 49153
EXPOSE 9876
EXPOSE 49152 

# Run ng project 
CMD ["ng", "serve", "--host", "0.0.0.0"]

