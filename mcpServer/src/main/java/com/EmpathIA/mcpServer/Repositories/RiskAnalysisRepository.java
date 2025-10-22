package com.EmpathIA.mcpServer.Repositories;

import com.EmpathIA.mcpServer.Models.RiskAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RiskAnalysisRepository extends JpaRepository<RiskAnalysis, Integer> {
}
