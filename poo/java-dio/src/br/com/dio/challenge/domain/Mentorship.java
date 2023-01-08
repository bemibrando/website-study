package br.com.dio.challenge.domain;

import java.time.LocalDate;

public class Mentorship extends Content{
    private LocalDate date;

    @Override
    public double calculateXp() {
        return XP_PATTERN + 20d;
    }

    public Mentorship(){

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
                "title='" + getTitle() + '\'' +
                ", description='" + getDescription() + '\'' +
                ", date='" + date +
                '}';
    }
}