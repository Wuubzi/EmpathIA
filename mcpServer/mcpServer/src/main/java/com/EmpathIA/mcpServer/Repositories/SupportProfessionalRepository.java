package com.EmpathIA.mcpServer.Repositories;

import com.EmpathIA.mcpServer.Models.RiskAnalysis;
import com.EmpathIA.mcpServer.Models.SupportProfessional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupportProfessionalRepository extends JpaRepository<SupportProfessional, Integer> {
}
