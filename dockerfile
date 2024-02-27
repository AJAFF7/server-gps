# Use an official Node.js runtime as a base image
FROM node:18-alpine3.19

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the app runs on
EXPOSE 8282

# Command to run the application
CMD ["npm", "start"]
