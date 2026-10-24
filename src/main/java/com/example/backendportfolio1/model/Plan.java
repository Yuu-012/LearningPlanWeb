package com.example.backendportfolio1.model;

import java.util.Date;

public class Plan {
    private Integer id;
    private String name;
    private Date startDay;
    private Date endDay;
    private Integer state;

    public void setId(Integer id){ this.id = id; }
    public void setName(String name){ this.name = name; }
    public void setStart(Date date){ this.startDay = date; }
    public void setEnd(Date date){ this.endDay = date; }
    public void setState(Integer state){ this.state = state; }

    public Integer getId(){ return id; }
    public String getName(){ return name; }
    public Date getStart(){ return startDay; }
    public Date getEnd(){ return endDay; }
    public Integer getState(){ return state; }
}