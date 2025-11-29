# Stage 1: Build
FROM maven:3.9.8-eclipse-temurin-22 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests


# Stage 2: Run
FROM openjdk:22-jdk
COPY --from=build /app/target/saasprojectbackend.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]