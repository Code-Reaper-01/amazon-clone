# Use an official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Give execution permission to react-scripts
RUN chmod +x node_modules/.bin/react-scripts

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Install a static server
RUN npm install -g serve

# Expose port 8080
EXPOSE 8080

# Command to run app
CMD ["serve", "-s", "build", "-l", "8080"]
