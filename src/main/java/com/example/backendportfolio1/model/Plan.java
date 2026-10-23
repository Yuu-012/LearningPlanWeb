package com.example.backendportfolio1.model;

import java.util.Date;

public class Plan {
    private Integer id;
    private String name;
    private Date start;
    private Date end;
    private Integer duration;
    private Integer state;

    public void setId(Integer id){ this.id = id; }
    public void setName(String name){ this.name = name; }
    public void setStart(Date date){ this.start = date; }
    public void setEnd(Date date){ this.end = date; }
    public void setDuration(Integer day){ this.duration = day; }
    public void setState(Integer state){ this.state = state; }

    public String getName(){ return name; }
    public Date getStart(){ return start; }
    public Date getEnd(){ return end; }
    public Integer getDuration(){ return duration; }
    public Integer getState(){ return state; }
}