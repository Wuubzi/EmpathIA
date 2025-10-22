package com.EmpathIA.mcpServer.Repositories;

import com.EmpathIA.mcpServer.Models.UserTracking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserTrackingRepository extends JpaRepository<UserTracking, Integer> {
    Optional<UserTracking> findTopByUserIdOrderByTrackingDateDesc(Integer userId);
}
