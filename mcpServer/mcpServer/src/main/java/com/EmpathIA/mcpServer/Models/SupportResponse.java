package com.EmpathIA.mcpServer.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity(name = "respuestas_apoyo")
@Table(name = "respuestas_apoyo")
public class SupportResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_respuesta")
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

    @Column(name = "mensaje_apoyo", columnDefinition = "TEXT")
    private String supportMessage;

    @Column(name = "tono_mensaje")
    private String tone;

    @Column(name = "fecha_envio")
    private LocalDate sentDate;

    @Column(name = "hora_envio")
    private LocalTime sentTime;

    @Column(name = "fue_leido")
    private String wasRead;

    @Column(name = "usuario_respondio")
    private String userResponded;
}
