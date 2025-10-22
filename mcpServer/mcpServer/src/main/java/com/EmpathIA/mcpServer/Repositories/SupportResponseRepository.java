package com.EmpathIA.mcpServer.Repositories;

import com.EmpathIA.mcpServer.Models.SupportResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupportResponseRepository extends JpaRepository<SupportResponse, Integer> {
}
