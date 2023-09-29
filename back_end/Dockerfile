# Choose a base image
FROM node:18

# Create app directory
# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --omit=dev

# Copy the rest of the application
# Bundle app source
COPY . .
COPY prisma ./prisma/

RUN npm i -g prisma
RUN prisma generate

# Expose the port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
