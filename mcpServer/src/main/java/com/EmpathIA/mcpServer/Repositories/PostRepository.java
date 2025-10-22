package com.EmpathIA.mcpServer.Repositories;

import com.EmpathIA.mcpServer.Models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    List<Post> findTop5ByUserIdOrderByPublishDateDesc(Integer userId);
}
