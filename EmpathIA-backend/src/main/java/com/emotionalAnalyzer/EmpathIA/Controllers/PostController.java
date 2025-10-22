package com.emotionalAnalyzer.EmpathIA.Controllers;

import com.emotionalAnalyzer.EmpathIA.DTO.RequestDTO.PostRequestDTO;
import com.emotionalAnalyzer.EmpathIA.DTO.RequestDTO.PostUpdateRequestDTO;
import com.emotionalAnalyzer.EmpathIA.DTO.ResponseDTO.Response;
import com.emotionalAnalyzer.EmpathIA.Models.Post;
import com.emotionalAnalyzer.EmpathIA.Services.PostService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/post")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/getAllPost")
    public ResponseEntity<List<Post>> getAllPost(){
        return new ResponseEntity<>(postService.getAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/getPostById")
    public ResponseEntity<Post> getPostById(@RequestParam  Long id_post) {
        return new ResponseEntity<>(postService.getPostById(id_post), HttpStatus.OK);
    }

    @DeleteMapping("/deletePost")
    public ResponseEntity<Response> deletePost(Long id_post, HttpServletRequest request){
        return new ResponseEntity<Response>(postService.deletePost(id_post, request), HttpStatus.OK);
    }
    @PostMapping("/createPost")
    public ResponseEntity<Response> createPost(@RequestBody PostRequestDTO post, HttpServletRequest request) {
        return new ResponseEntity<Response>(postService.createPost(post, request), HttpStatus.OK);
    }
    @PutMapping("/updatePost")
    public ResponseEntity<Response> updatePost(Long id_post, PostUpdateRequestDTO post, HttpServletRequest request){
        return new ResponseEntity<>(postService.updatePost(id_post, post, request), HttpStatus.OK);
    }
}
