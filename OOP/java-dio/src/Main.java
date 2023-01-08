import java.time.LocalDate;

import br.com.dio.challenge.domain.*;

public class Main {
    public static void main(String[] args) {
        Course course1 = new Course();
        course1.setTitle("java course");
        course1.setDescription("java course description");
        course1.setWorkload(8);

        Course course2 = new Course();
        course2.setTitle("js course");
        course2.setDescription("js course description");
        course2.setWorkload(4);

        Mentorship mentorship = new Mentorship();
        mentorship.setTitle("java course");
        mentorship.setDescription("java course description");
        mentorship.setDate(LocalDate.now());

        
        Bootcamp bootcamp = new Bootcamp();
        bootcamp.setName("Bootcamp Java Developer");
        bootcamp.setDescription("Bootcamp Java Developer Description");
        bootcamp.getContent().add(course1);
        bootcamp.getContent().add(course2);
        bootcamp.getContent().add(mentorship);

        Dev devMaria = new Dev();
        System.out.println("--");
        devMaria.setName("Maria");
        devMaria.bootcampSubscription(bootcamp);
        System.out.println("Maria Subscriptions: " + devMaria.getContentSubscription());
        System.out.println("John Content Concluded: " + devMaria.getContentConcluded());
        System.out.println("Maria Xp: " + devMaria.calculateTotalXp());
        devMaria.progress();
        devMaria.progress();
        System.out.println("--");
        System.out.println("Maria Subscriptions: " + devMaria.getContentSubscription());
        System.out.println("Maria Content Concluded: " + devMaria.getContentConcluded());
        System.out.println("Maria Xp: " + devMaria.calculateTotalXp());

        Dev devJohn = new Dev();
        System.out.println("--");
        devJohn.setName("John");
        devJohn.bootcampSubscription(bootcamp);
        System.out.println("John Subscriptions: " + devJohn.getContentSubscription());
        System.out.println("John Content Concluded: " + devJohn.getContentConcluded());
        System.out.println("John Xp: " + devJohn.calculateTotalXp());
        devJohn.progress();
        devJohn.progress();
        devJohn.progress();
        System.out.println("--");
        System.out.println("John Subscriptions: " + devJohn.getContentSubscription());
        System.out.println("John Content Concluded: " + devJohn.getContentConcluded());
        System.out.println("John Xp: " + devJohn.calculateTotalXp());


    }
}