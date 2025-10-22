# Etapa 1: construir la app
FROM gradle:8.10-jdk21 AS build
WORKDIR /app
COPY src .
RUN gradle clean bootJar --no-daemon

# Etapa 2: imagen final
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

# Expone el puerto (Render lo sobreescribe con $PORT)
EXPOSE 8080

# Ejecuta la app
ENTRYPOINT ["java", "-jar", "app.jar"]
