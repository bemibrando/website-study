package br.com.dio.challenge.domain;

public class Course extends Content{
    private int workload;

    @Override
    public double calculateXp() {
        return XP_PATTERN * this.workload;
    }

    public Course(){

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
                "title='" + getTitle() + '\'' +
                ", description='" + getDescription() + '\'' +
                ", workLoad='" + workload +
                '}';
    }
}