package com.emotionalAnalyzer.EmpathIA.Repositories;

import com.emotionalAnalyzer.EmpathIA.Models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    Optional<Post> findByIdPost(Long idPost);
}
