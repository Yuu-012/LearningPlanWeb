package com.example.backendportfolio1.service;

import com.example.backendportfolio1.dao.PlanDao;
import com.example.backendportfolio1.model.Plan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PlanService {

    @Autowired
    private PlanDao planDao;

    public List<Plan> getPlans(){ return planDao.getPlans(); }

    public Plan getPlan(Integer id){
        return planDao.getPlan(id);
    }

    public Integer createPlan(Plan plan){
        return planDao.createPlan(plan);
    }

    public void updatePlan(Integer id, Plan plan){
        planDao.updatePlan(id, plan);
    }

    public void deletePlan(Integer id){
        planDao.deletePlan(id);
    }
}
