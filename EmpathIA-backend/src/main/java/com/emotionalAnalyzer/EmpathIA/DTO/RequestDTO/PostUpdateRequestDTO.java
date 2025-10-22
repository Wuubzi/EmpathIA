package com.emotionalAnalyzer.EmpathIA.DTO.RequestDTO;

import jakarta.persistence.Column;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class PostUpdateRequestDTO {

    private String textContent;
    private LocalDate publishDate;
    private LocalTime publishTime;
    private boolean isPublic;
}
