package com.emotionalAnalyzer.EmpathIA.Services;

import com.emotionalAnalyzer.EmpathIA.DTO.RequestDTO.PostUpdateRequestDTO;
import com.emotionalAnalyzer.EmpathIA.DTO.ResponseDTO.Response;
import com.emotionalAnalyzer.EmpathIA.Models.Post;
import com.emotionalAnalyzer.EmpathIA.Repositories.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Response createPost(Post post, HttpServletRequest request) {
            postRepository.save(post);
        Response response = new Response();
        response.setMessage("Post created");
        response.setStatus("success");
        response.setUrl(request.getRequestURL().toString());
        return response;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id_post) {
        Optional<Post> postOptional = postRepository.findByIdPost(id_post);
        if (postOptional.isEmpty()) {
            throw new EntityNotFoundException("Post not found");
        }
        return postOptional.get();
    }

    public Response updatePost(Long idPost, PostUpdateRequestDTO postRequest, HttpServletRequest request) {
        Optional<Post> postOptional = postRepository.findByIdPost(idPost);
        if (postOptional.isEmpty()) {
            throw new EntityNotFoundException("Post not found");
        }

        Post existingPost = postOptional.get();

        existingPost.setTextContent(postRequest.getTextContent());
        existingPost.setPublishDate(postRequest.getPublishDate());
        existingPost.setPublishTime(postRequest.getPublishTime());
        existingPost.setPublic(postRequest.isPublic());

        postRepository.save(existingPost);

        Response response = new Response();
        response.setMessage("Post updated");
        response.setStatus("success");
        response.setUrl(request.getRequestURL().toString());
        return response;
    }


    public Response deletePost(Long id_post, HttpServletRequest request) {
        Optional<Post> postOptional = postRepository.findByIdPost(id_post);
        if (postOptional.isEmpty()) {
            throw new EntityNotFoundException("Post not found");
        }
        postRepository.delete(postOptional.get());
        Response response = new Response();
        response.setMessage("Post deleted");
        response.setStatus("success");
        response.setUrl(request.getRequestURL().toString());
        return response;
    }
}
