package com.mcpServer.EmpathIA_mcp.Services;

import com.mcpServer.EmpathIA_mcp.Repositories.DatabaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatabaseService {
    private final DatabaseRepository databaseRepository;

    @Autowired
    public DatabaseService(DatabaseRepository databaseRepository) {
        this.databaseRepository = databaseRepository;
    }

   @Tool("")
    public String create_user_alert(){
        return "a";
    }

    public String register_risks_analysis() {
        return "b";
    }

    public String start_user_monitoring(){
        return "c";
    }

    public String get_user_recent_posts(){
        return "d";
    }


    public String check_active_monitoring(){}
}
