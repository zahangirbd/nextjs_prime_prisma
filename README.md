# nextjs_prime_prisma 
## This is a sample project using next.js, primereact and prisma

## How to run this project

1. In Windows run Docker Desktop App
2. Go to project directory and run the following command
   ```
   docker-compose up
   ```
3. In case you need to recreate docker container every time
   - First delete the container from Docker Desktop App
   - Run the following commands
     ```
     docker-compose rm -f
	   docker-compose pull
	   docker-compose up --build -d
     ```
4. The app will be running at 3000 port. Hit the following url in web browser
   - Hit the following url in web browser
     http://localhost:3000
