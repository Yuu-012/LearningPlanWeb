package com.example.backendportfolio1.controller;

import com.example.backendportfolio1.model.Plan;
import com.example.backendportfolio1.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlanController {

    @Autowired
    private PlanService planService;

    @GetMapping("/plan")
    public ResponseEntity<List<Plan>> getPlans(){
        List<Plan> plans = planService.getPlans();

        if (plans != null)
            return ResponseEntity.status(HttpStatus.OK).body(plans);
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @GetMapping("/plan/{id}")
    public ResponseEntity<Plan> getPlan(@PathVariable Integer id){
        Plan plan = planService.getPlan(id);

        if (plan != null)
            return ResponseEntity.status(HttpStatus.OK).body(plan);
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/plan")
    public ResponseEntity<Plan> createPlan(@RequestBody Plan plan){
        Integer id = planService.createPlan(plan);

        Plan newPlan = planService.getPlan(id);

        return ResponseEntity.status(HttpStatus.CREATED).body(newPlan);
    }

    @PutMapping("/plan/{id}")
    public ResponseEntity<?> updatePlan(@PathVariable Integer id, @RequestBody Plan plan){
        Plan checkPlan = planService.getPlan(id);

        if (checkPlan == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        planService.updatePlan(id, plan);
        Plan afterPlan = planService.getPlan(id);

        return ResponseEntity.status(HttpStatus.OK).body(afterPlan);
    }

    @DeleteMapping("/plan/{id}")
    public ResponseEntity<?> deletePlan(@PathVariable Integer id){
        planService.deletePlan(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}