package com.example.backendportfolio1.controller;

import com.example.backendportfolio1.model.Plan;
import com.example.backendportfolio1.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class PlanController {

    @Autowired
    private PlanService planService;

    @GetMapping("/getPlan/{id}")
    public ResponseEntity<Plan> getPlan(@PathVariable Integer id){
        Plan plan = planService.getPlan(id);

        if (plan != null)
            return ResponseEntity.status(HttpStatus.OK).body(plan);
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/createPlan")
    public ResponseEntity<Plan> createPlan(@RequestBody Plan plan){
        Integer id = planService.createPlan(plan);

        Plan newPlan = planService.getPlan(id);

        return ResponseEntity.status(HttpStatus.OK).body(newPlan);
    }

    @PutMapping("/updatePlan/{id}")
    public ResponseEntity<?> updatePlan(@PathVariable Integer id, @RequestBody Plan plan){
        Plan checkPlan = planService.getPlan(id);

        if (checkPlan == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        planService.updatePlan(id, plan);
        Plan afterPlan = planService.getPlan(id);

        return ResponseEntity.status(HttpStatus.OK).body(afterPlan);
    }

    @DeleteMapping("/deletePlan/{id}")
    public ResponseEntity<?> deletePlan(@PathVariable Integer id){
        planService.deletePlan(id);

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}