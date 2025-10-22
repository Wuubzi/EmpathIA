package com.EmpathIA.mcpServer.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "organizaciones_ayuda")
@Table(name = "organizaciones_ayuda")
public class HelpOrganization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_organizacion")
    private Integer id;

    @Column(name = "nombre_organizacion")
    private String organizationName;

    @Column(name = "nit")
    private String taxId;

    @Column(name = "tipo_organizacion")
    private String organizationType;

    @Column(name = "servicios_ofrecidos", columnDefinition = "TEXT")
    private String offeredServices;

    private String city;
    private String department;
    private String address;

    @Column(name = "telefono_principal")
    private String mainPhone;

    @Column(name = "linea_emergencia")
    private String emergencyLine;

    private String email;

    @Column(name = "atiende_24_7")
    private String open247;

    @Column(name = "costo_servicio")
    private String serviceCost;
}

