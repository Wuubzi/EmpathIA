package com.EmpathIA.mcpServer.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity(name = "alerta")
@Table(name = "alerta")
public class Alert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_alerta")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_analisis")
    private RiskAnalysis analysis;

    @ManyToOne
    @JoinColumn(name = "id_publicacion")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private User user;

    @Column(name = "nivel_urgencia")
    private String urgencyLevel;

    @Column(name = "tipo_alerta")
    private String alertType;

    private String recipient;

    @Column(name = "mensaje_alerta", columnDefinition = "TEXT")
    private String alertMessage;

    @Column(name = "fecha_alerta")
    private LocalDate alertDate;

    @Column(name = "hora_alerta")
    private LocalTime alertTime;

    @Column(name = "fue_atendida")
    private String wasAttended;

    @Column(name = "tiempo_atencion_minutos")
    private Integer attentionTimeMinutes;

    @ManyToOne
    @JoinColumn(name = "id_profesional_asignado")
    private SupportProfessional assignedProfessional;
}
