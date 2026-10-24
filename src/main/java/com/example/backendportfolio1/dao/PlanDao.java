package com.example.backendportfolio1.dao;

import com.example.backendportfolio1.model.Plan;
import com.example.backendportfolio1.rowmapper.PlanRowmapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class PlanDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public Plan getPlan(Integer id){
        String sql = "SELECT id, name, startDay, endDay, state " +
                     "FROM plan WHERE id = :id";
        Map<String, Object> map = new HashMap<>();
        PlanRowmapper rowMapper = new PlanRowmapper();

        map.put("id", id);

        List<Plan> planList = namedParameterJdbcTemplate.query(sql, map, rowMapper);

        if (!planList.isEmpty())
            return planList.getFirst();
        else
            return null;
    }

    public Integer createPlan(Plan plan){
        String sql = "INSERT INTO plan(name, startDay, endDay, state) " +
                     "VALUES(:name, :startDay, :endDay, :state)";
        Map<String, Object> map = new HashMap<>();
        map.put("name", plan.getName());
        map.put("startDay", plan.getStart());
        map.put("endDay", plan.getEnd());
        map.put("state", plan.getState());

        // 資料庫中自動生成與排列的id (Primary key)
        KeyHolder keyHolder = new GeneratedKeyHolder();

        namedParameterJdbcTemplate.update(sql, new MapSqlParameterSource(map), keyHolder);

        Integer newPlanId = keyHolder.getKey().intValue();
        return newPlanId;
    }

    public void updatePlan(Integer id, Plan plan){
        String sql = "UPDATE plan SET name = :name, startDay = :startDay, " +
                     "endDay = :endDay, state = :state " +
                     "WHERE id = :id";
        Map<String, Object> map = new HashMap<>();
        map.put("id", id);
        map.put("name", plan.getName());
        map.put("startDay", plan.getStart());
        map.put("endDay", plan.getEnd());
        map.put("state", plan.getState());

        namedParameterJdbcTemplate.update(sql, new MapSqlParameterSource(map));
    }

    public void deletePlan(Integer id){
        String sql = "DELETE FROM plan WHERE id = :id";
        Map<String, Object> map = new HashMap<>();
        map.put("id", id);
        
        namedParameterJdbcTemplate.update(sql, new MapSqlParameterSource(map));
    }
}
