package com.EmpathIA.mcpServer.Models;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity(name = "seguimiento_usuario")
@Table(name = "seguimiento_usuario")
public class UserTracking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_seguimiento")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private User user;

    @Column(name = "fecha_seguimiento")
    private LocalDate trackingDate;

    @Column(name = "puntuacion_riesgo_actual", precision = 5, scale = 2)
    private Double currentRiskScore;

    private String trend;

    @Column(name = "num_publicacion_ultimo_mes")
    private Integer lastMonthPosts;

    @Column(name = "num_alertas_generadas")
    private Integer generatedAlerts;

    @Column(name = "ultimo_contacto_profesional")
    private LocalDate lastProfessionalContact;

    @Column(name = "en_tratamiento_actual")
    private String inCurrentTreatment;

    @Column(name = "notas_seguimiento", columnDefinition = "TEXT")
    private String trackingNotes;
}
