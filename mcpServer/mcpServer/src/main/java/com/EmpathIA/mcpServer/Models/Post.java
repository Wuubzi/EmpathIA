package com.EmpathIA.mcpServer.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;


    @Data
    @Entity(name = "publicaciones")
    @Table(name = "publicaciones")
    public class Post {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id_publicacion")
        private Integer id;

        @ManyToOne
        @JoinColumn(name = "id_usuario")
        private User user;

        @Column(name = "contenido_texto", columnDefinition = "TEXT")
        private String content;

        @Column(name = "fecha_publicacion")
        private LocalDate publishDate;

        @Column(name = "hora_publicacion")
        private LocalTime publishTime;

        @Column(name = "es_publica")
        private Boolean isPublic;
    }

}
