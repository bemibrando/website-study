package br.com.dio.challenge.domain;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class Bootcamp {
    private String name;
    private String description;
    private final LocalDate dateStart = LocalDate.now();
    private final LocalDate dateFinal = dateStart.plusDays(45);
    private Set<Dev> devsSubscription = new HashSet<>();
    private Set<Content> content = new LinkedHashSet<>();

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    
    public Set<Dev> getDevsSubscription() {
        return devsSubscription;
    }
    public void setDevsSubscription(Set<Dev> devsSubscription) {
        this.devsSubscription = devsSubscription;
    }
    
    public Set<Content> getContent() {
        return content;
    }
    public void setContent(Set<Content> content) {
        this.content = content;
    }

    public LocalDate getDateStart() {
        return dateStart;
    }
    
    public LocalDate getDateFinal() {
        return dateFinal;
    }
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((description == null) ? 0 : description.hashCode());
        result = prime * result + ((dateStart == null) ? 0 : dateStart.hashCode());
        result = prime * result + ((dateFinal == null) ? 0 : dateFinal.hashCode());
        result = prime * result + ((devsSubscription == null) ? 0 : devsSubscription.hashCode());
        result = prime * result + ((content == null) ? 0 : content.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Bootcamp other = (Bootcamp) obj;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (description == null) {
            if (other.description != null)
                return false;
        } else if (!description.equals(other.description))
            return false;
        if (dateStart == null) {
            if (other.dateStart != null)
                return false;
        } else if (!dateStart.equals(other.dateStart))
            return false;
        if (dateFinal == null) {
            if (other.dateFinal != null)
                return false;
        } else if (!dateFinal.equals(other.dateFinal))
            return false;
        if (devsSubscription == null) {
            if (other.devsSubscription != null)
                return false;
        } else if (!devsSubscription.equals(other.devsSubscription))
            return false;
        if (content == null) {
            if (other.content != null)
                return false;
        } else if (!content.equals(other.content))
            return false;
        return true;
    }

    
}
