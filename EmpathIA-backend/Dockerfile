# Etapa 1: construir el JAR
FROM gradle:8.5-jdk17 AS build
WORKDIR /app

# Copiar archivos Gradle
COPY build.gradle settings.gradle ./
COPY gradle gradle
COPY src src

# Construir el proyecto
RUN gradle clean bootJar --no-daemon

# Etapa 2: ejecutar el JAR
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copiar el JAR construido desde la etapa anterior
COPY --from=build /app/build/libs/*.jar app.jar

# Exponer el puerto
EXPOSE 8000

# Evitar error de permisos temporales
ENV JAVA_OPTS="-Djava.io.tmpdir=/tmp"

# Comando de arranque
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
