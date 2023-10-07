# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular app for production
RUN ng build --configuration=production

# Use a lightweight Nginx image as the runtime environment
FROM nginx:latest

# Copy the built Angular app from the build stage to the Nginx web server directory
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Expose port 80 for incoming HTTP traffic
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
