package br.com.dio.challenge.domain;

import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

public class Dev {
    private String name;
    private Set<Content> contentSubscription = new LinkedHashSet<>();
    private Set<Content> contentConcluded = new LinkedHashSet<>();

    public void bootcampSubscription(Bootcamp bootcamp){
        this.contentSubscription.addAll(bootcamp.getContent());
        bootcamp.getDevsSubscription().add(this);
    }

    public void progress() {
        Optional<Content> content = this.contentSubscription.stream().findFirst();
        if(content.isPresent()){
            this.contentConcluded.add(content.get());
            this.contentSubscription.remove(content.get());
        }
        else {
            System.err.println("You're not subscribed to any content");
        }
    }

    public double calculateTotalXp() {
        return this.contentConcluded
                .stream()
                .mapToDouble(content -> content.calculateXp())
                .sum();
    }

    public String getName() {
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public Set<Content> getContentSubscription(){
        return contentSubscription;
    }

    public void setContentSubscription(Set<Content> contentSubscription){
        this.contentSubscription = contentSubscription;
    }

    public Set<Content> getContentConcluded(){
        return contentConcluded;
    }

    public void setContentConcluded(Set<Content> contentConcluded){
        this.contentConcluded = contentConcluded;
    }

    @Override
    public boolean equals(Object o){
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dev dev = (Dev) o;
         return Objects.equals(name, dev.name) && Objects.equals(contentSubscription, dev.contentSubscription) && Objects.equals(contentConcluded, dev.contentConcluded);
    }

    @Override
    public int hashCode(){
        return Objects.hash(name, contentSubscription, contentConcluded);
    }
}
