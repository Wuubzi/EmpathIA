package com.emotionalAnalyzer.EmpathIA.Models;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@Table(name = "publicaciones")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_publicacion")
    private Long idPost;

    @Column(name = "id_usuario", nullable = false)
    private Long userId;

    @Column(name = "contenido_texto", columnDefinition = "TEXT", nullable = false)
    private String textContent;

    @Column(name = "fecha_publicacion", nullable = false)
    private LocalDate publishDate;

    @Column(name = "hora_publicacion", nullable = false)
    private LocalTime publishTime;

    @Column(name = "es_publica", nullable = false)
    private boolean isPublic;
}
