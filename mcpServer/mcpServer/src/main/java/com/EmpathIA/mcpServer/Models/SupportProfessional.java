package com.EmpathIA.mcpServer.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "profesionales_apoyo")
@Table(name = "profesionales_apoyo")
public class SupportProfessional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_profesional")
    private Integer id;

    @Column(name = "nombre_completo")
    private String fullName;

    @Column(name = "cedula")
    private String idNumber;

    @Column(name = "especialidad")
    private String specialty;

    @Column(name = "num_tarjeta_profesional")
    private String professionalLicense;

    private String city;
    private String department;
    private String phone;
    private String email;

    @Column(name = "anos_experiencia")
    private Integer yearsExperience;

    @Column(name = "calificacion_promedio")
    private Double averageRating;

    @Column(name = "num_casos_atendidos")
    private Integer casesHandled;

    private String available;

    @Column(name = "horario_atencion")
    private String workSchedule;
}
