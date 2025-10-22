package com.EmpathIA.mcpServer.Repositories;

import com.EmpathIA.mcpServer.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
