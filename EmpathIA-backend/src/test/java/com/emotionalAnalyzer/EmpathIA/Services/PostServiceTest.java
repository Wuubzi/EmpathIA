package com.emotionalAnalyzer.EmpathIA.Services;

import com.emotionalAnalyzer.EmpathIA.DTO.RequestDTO.PostUpdateRequestDTO;
import com.emotionalAnalyzer.EmpathIA.DTO.ResponseDTO.Response;
import com.emotionalAnalyzer.EmpathIA.Models.Post;
import com.emotionalAnalyzer.EmpathIA.Repositories.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PostServiceTest {

    @Mock
    private PostRepository postRepository;

    @Mock
    private HttpServletRequest request;

    @InjectMocks
    private PostService postService;

    private Post post;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        Post post = new Post();
        post.setIdPost(1L);
        post.setUserId(100L);
        post.setTextContent("This is a test post.");
        post.setPublishDate(LocalDate.now());
        post.setPublishTime(LocalTime.now());
        post.setPublic(true);

        this.post = post;

        when(request.getRequestURL()).thenReturn(new StringBuffer("http://localhost:8080/api/posts"));
    }

    @Test
    void testCreatePost() {
        when(postRepository.save(post)).thenReturn(post);

        Response response = postService.createPost(post, request);

        assertEquals("Post created", response.getMessage());
        assertEquals("success", response.getStatus());
        assertTrue(response.getUrl().contains("http://localhost:8080"));
        verify(postRepository, times(1)).save(post);
    }

    @Test
    void testGetAllPosts() {
        when(postRepository.findAll()).thenReturn(List.of(post));

        List<Post> result = postService.getAllPosts();

        assertEquals(1, result.size());
        assertEquals("This is a test post.", result.get(0).getTextContent());
        assertTrue(result.get(0).isPublic());
        verify(postRepository, times(1)).findAll();
    }

    @Test
    void testGetPostById_NotFound() {
        when(postRepository.findByIdPost(99L)).thenReturn(Optional.empty());

        assertThrows(EntityNotFoundException.class, () -> postService.getPostById(99L));
        verify(postRepository, times(1)).findByIdPost(99L);
    }

    @Test
    void testDeletePost() {
        when(postRepository.findByIdPost(1L)).thenReturn(Optional.of(post));

        Response response = postService.deletePost(1L, request);

        assertEquals("Post deleted", response.getMessage());
        assertEquals("success", response.getStatus());
        verify(postRepository, times(1)).deleteById(1);
    }

    @Test
    void testDeletePost_NotFound() {
        
        when(postRepository.findByIdPost(99L)).thenReturn(Optional.empty());

        assertThrows(EntityNotFoundException.class, () -> postService.deletePost(99L, request));
        verify(postRepository, never()).deleteById((int) anyLong());
    }

    @Test
    void testUpdatePost_Success() {
        PostUpdateRequestDTO postRequest = new PostUpdateRequestDTO();
        postRequest.setTextContent("Updated post content");
        postRequest.setPublishDate(LocalDate.of(2025, 10, 21));
        postRequest.setPublishTime(LocalTime.of(12, 30));
        postRequest.setPublic(false);

        when(postRepository.findByIdPost(1L)).thenReturn(Optional.of(post));
        when(postRepository.save(any(Post.class))).thenReturn(post);
        when(request.getRequestURL()).thenReturn(new StringBuffer("http://localhost:8080/api/posts/1"));

        Response response = postService.updatePost(1L, postRequest, request);

        assertNotNull(response);
        assertEquals("Post updated", response.getMessage());
        assertEquals("success", response.getStatus());

        verify(postRepository, times(1)).findByIdPost(1L);
        verify(postRepository, times(1)).save(post);
    }

    @Test
    void testUpdatePost_NotFound() {
        PostUpdateRequestDTO postRequest = new PostUpdateRequestDTO();
        postRequest.setTextContent("Updated post content");

        when(postRepository.findByIdPost(1L)).thenReturn(Optional.empty());

        assertThrows(EntityNotFoundException.class, () -> postService.updatePost(1L, postRequest, request));

        verify(postRepository, times(1)).findByIdPost(1L);
        verify(postRepository, never()).save(any(Post.class));
    }
}
