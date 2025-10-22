package com.EmpathIA.mcpServer.Repositories;

import com.EmpathIA.mcpServer.Models.HelpOrganization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HelpOrganizationRepository extends JpaRepository<HelpOrganization, Integer> {
}
