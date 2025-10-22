package com.emotionalAnalyzer.EmpathIA.DTO.ResponseDTO;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseException {
    private String message;
    private String request;
    private String exception;
}
