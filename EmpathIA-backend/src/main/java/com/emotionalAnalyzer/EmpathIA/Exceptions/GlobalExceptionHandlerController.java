package com.emotionalAnalyzer.EmpathIA.Exceptions;


import com.emotionalAnalyzer.EmpathIA.DTO.ResponseDTO.ResponseException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandlerController {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ResponseException> handleEntityNotFoundException(EntityNotFoundException ex, HttpServletRequest request) {
         return new ResponseEntity<>(new ResponseException(ex.getMessage(), request.getRequestURI().toString(), "EntityNotFound"), HttpStatus.BAD_REQUEST);
    }
}
