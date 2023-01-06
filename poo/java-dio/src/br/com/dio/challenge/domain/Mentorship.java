package br.com.dio.challenge.domain;

import java.time.LocalDate;

public class Mentorship {
    private String title;
    private String description;
    private LocalDate date;

    public Mentorship(){
        
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

    public LocalDate getDate(){
        return this.date;
    }

    public void setDate(LocalDate date){
        this.date = date;
    }

    @Override
    public String toString() {
        return "Course{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", date='" + date +
                '}';
    }
}