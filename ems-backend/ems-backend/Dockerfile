# Use Java 17 base image
FROM eclipse-temurin:17-jdk-alpine

# Create app directory
WORKDIR /app

# Copy project files
COPY . .

# Give execute permission to mvnw
RUN chmod +x mvnw

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose port (Render uses PORT env var)
EXPOSE 8080

# Run the Spring Boot app
CMD ["java", "-jar", "target/*.jar"]