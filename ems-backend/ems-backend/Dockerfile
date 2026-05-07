# Use Java 17
FROM eclipse-temurin:17-jdk

# Create app directory
WORKDIR /app

# Copy only Maven wrapper and pom first (for better caching)
COPY mvnw pom.xml ./
COPY .mvn .mvn

# Give permission to mvnw
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline

# Copy rest of the project
COPY src src

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose port (Render provides PORT env variable)
EXPOSE 8080

# Run the Spring Boot app
CMD ["java", "-jar", "target/*.jar"]
