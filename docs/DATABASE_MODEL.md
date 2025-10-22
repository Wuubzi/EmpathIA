# Modelo de Datos – EmpathIA

---

## Tabla: USUARIOS
| Campo | Tipo | Restricciones |
|--------|------|---------------|
| id_usuario | INTEGER | PK |
| nombre_completo | VARCHAR(150) | NOT NULL |
| email | VARCHAR(150) | UNIQUE |
| ciudad | VARCHAR(100) | NOT NULL |
| departamento | VARCHAR(100) | NOT NULL |
| activo | VARCHAR(5) | DEFAULT 'Sí' |

---

## Tabla: PUBLICACIONES
| Campo | Tipo | Restricciones |
|--------|------|---------------|
| id_publicacion | INTEGER | PK |
| id_usuario | INTEGER | FK → USUARIOS |
| contenido_texto | TEXT | NOT NULL |
| fecha_publicacion | DATE | NOT NULL |
| hora_publicacion | TIME | NOT NULL |

---

## Tabla: ANALISIS_RIESGO
| Campo | Tipo | Restricciones |
|--------|------|---------------|
| id_analisis | INTEGER | PK |
| id_publicacion | INTEGER | FK → PUBLICACIONES |
| nivel_riesgo | VARCHAR(20) | CHECK ('Bajo','Moderado','Alto') |
| puntuacion_riesgo | DECIMAL(5,2) | 0–100 |
| requiere_atencion_inmediata | VARCHAR(5) | 'Sí'/'No' |

---

## Tabla: ALERTAS
| Campo | Tipo | Restricciones |
|--------|------|---------------|
| id_alerta | INTEGER | PK |
| id_analisis | INTEGER | FK → ANALISIS_RIESGO |
| id_usuario | INTEGER | FK → USUARIOS |
| nivel_urgencia | VARCHAR(20) | NOT NULL |
| mensaje_alerta | TEXT | NOT NULL |

---

## Tabla: PROFESIONALES_APOYO
| Campo | Tipo | Restricciones |
|--------|------|---------------|
| id_profesional | INTEGER | PK |
| nombre_completo | VARCHAR(150) | NOT NULL |
| especialidad | VARCHAR(100) | |
| email | VARCHAR(150) | UNIQUE |
| disponible | VARCHAR(5) | DEFAULT 'Sí' |

---

## Tabla: ORGANIZACIONES_AYUDA
| Campo | Tipo | Restricciones |
|--------|------|---------------|
| id_organizacion | INTEGER | PK |
| nombre_organizacion | VARCHAR(200) | NOT NULL |
| ciudad | VARCHAR(100) | NOT NULL |
| telefono_principal | VARCHAR(25) | NOT NULL |
| email | VARCHAR(150) | |

---

## Tabla: CONTACTOS_EMERGENCIA
| Campo | Tipo | Restricciones |
|--------|------|---------------|
| id_contacto | INTEGER | PK |
| id_usuario | INTEGER | FK → USUARIOS |
| nombre_contacto | VARCHAR(150) | NOT NULL |
| telefono | VARCHAR(25) | NOT NULL |
| acepta_recibir_alertas | VARCHAR(5) | DEFAULT 'Sí' |
