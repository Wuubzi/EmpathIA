package com.EmpathIA.mcpServer.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

    @Data
    @Entity(name = "analisis_riesgo")
    @Table(name = "analisis_riesgo")
    public class RiskAnalysis {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id_analisis")
        private Integer id;

        @ManyToOne
        @JoinColumn(name = "id_publicacion")
        private Post post;

        @ManyToOne
        @JoinColumn(name = "id_usuario")
        private User user;

        @Column(name = "nivel_riesgo")
        private String riskLevel;

        @Column(name = "puntuacion_riesgo")
        private String riskScore;

        @Column(name = "palabras_clave_inmediata")
        private String keywords;

        @Column(name = "sentimiento_general")
        private String sentiment;

        @Column(name = "require_atencion_medica")
        private Boolean requiresMedicalAttention;

        @Column(name = "fecha_analisis")
        private LocalDate analysisDate;

        @Column(name = "hora_analisis")
        private LocalTime analysisTime;

        @Column(name = "modelo_ia_usado")
        private String aiModelUsed;

        @Column(name = "confianza_prediccion")
        private Double predictionConfidence;
}
