package br.com.dio.challenge.domain;

public class Course {
    private String title;
    private String description;
    private int workload;

    public Course(){
        
    }

    public String getTitle(){
        return this.title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDescription(){
        return this.description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public int getWorkload(){
        return this.workload;
    }

    public void setWorkload(int workload){
        this.workload = workload;
    }

    @Override
    public String toString() {
        return "Course{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", workLoad='" + workload +
                '}';
    }
}