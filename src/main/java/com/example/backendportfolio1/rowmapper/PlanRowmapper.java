package com.example.backendportfolio1.rowmapper;

import com.example.backendportfolio1.model.Plan;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PlanRowmapper implements RowMapper<Plan> {

    @Override
    public Plan mapRow(ResultSet rs, int rowNum) throws SQLException {

        Plan plan = new Plan();

        plan.setId(rs.getInt("id"));
        plan.setName(rs.getString("name"));
        plan.setStart(rs.getDate("startDay"));
        plan.setEnd(rs.getDate("endDay"));
        plan.setState(rs.getInt("state"));

        return plan;
    }
}
