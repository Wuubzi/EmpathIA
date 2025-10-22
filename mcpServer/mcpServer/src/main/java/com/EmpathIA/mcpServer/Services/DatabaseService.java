package com.EmpathIA.mcpServer.Services;

import com.EmpathIA.mcpServer.Models.*;
import com.EmpathIA.mcpServer.Repositories.*;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class DatabaseService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final RiskAnalysisRepository riskAnalysisRepository;
    private final AlertRepository alertRepository;
    private final UserTrackingRepository userTrackingRepository;

    @Autowired
    public DatabaseService(UserRepository userRepository, PostRepository postRepository, RiskAnalysisRepository riskAnalysisRepository, AlertRepository alertRepository, UserTrackingRepository userTrackingRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
        this.riskAnalysisRepository = riskAnalysisRepository;
        this.alertRepository = alertRepository;
        this.userTrackingRepository = userTrackingRepository;
    }
    @Tool(description = "Creates and registers a system alert for a specific user when unusual behavior or risks are detected.")
    public String create_user_alert(Long userId, String alertType, String message, String urgencyLevel) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return "User not found.";
        }

        Alert alert = new Alert();
        alert.setUser(userOpt.get());
        alert.setAlertType(alertType);
        alert.setAlertMessage(message);
        alert.setUrgencyLevel(urgencyLevel);
        alert.setAlertDate(LocalDate.now());
        alert.setAlertTime(LocalTime.now());
        alert.setWasAttended("No");

        alertRepository.save(alert);
        return "✅ Alert created successfully for user ID: " + userId;
    }

    @Tool(description = "Records a detailed user risk analysis, storing potential threats or anomalies identified by the system.")
    public String register_risks_analysis(Long userId, Double riskLevel) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return "User not found.";
        }

        RiskAnalysis analysis = new RiskAnalysis();
        analysis.setUser(userOpt.get());
        analysis.setRiskScore(String.valueOf(riskLevel));
        analysis.setAnalysisDate(LocalDate.now());
        analysis.setAnalysisTime(LocalTime.now());

        riskAnalysisRepository.save(analysis);
        return "✅ Risk analysis saved for user ID: " + userId + " (Risk level: " + riskLevel + ")";
    }

    @Tool(description = "Initiates continuous monitoring of user activity to track patterns and detect suspicious behavior.")
    public String start_user_monitoring(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return "User not found.";
        }

        UserTracking tracking = new UserTracking();
        tracking.setUser(userOpt.get());
        tracking.setTrackingDate(LocalDate.now());
        tracking.setTrend("Stable");
        tracking.setCurrentRiskScore(0.0);
        tracking.setInCurrentTreatment("No");
        userTrackingRepository.save(tracking);

        return "🔍 Monitoring started for user ID: " + userId;
    }

    @Tool(description = "Retrieves the latest posts or activity logs from a user for further analysis and reporting.")
    public String get_user_recent_posts(Integer userId) {
        List<Post> posts = postRepository.findTop5ByUserIdOrderByPublishDateDesc(userId);
        if (posts.isEmpty()) {
            return "No posts found for user ID: " + userId;
        }

        StringBuilder result = new StringBuilder("📝 Last 5 posts:\n");
        for (Post p : posts) {
            result.append("- ").append(p.getContent()).append(" (").append(p.getPublishDate()).append(")\n");
        }
        return result.toString();
    }

    @Tool(description = "Verifies whether a user is currently under active monitoring and returns the monitoring status.")
    public String check_active_monitoring(Integer userId) {
        Optional<UserTracking> trackingOpt = userTrackingRepository.findTopByUserIdOrderByTrackingDateDesc(userId);
        return trackingOpt.map(userTracking -> "✅ User is under active monitoring. Last update: " + userTracking.getTrackingDate()).orElse("❌ User not currently monitored.");
    }

}
