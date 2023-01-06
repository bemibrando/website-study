import br.com.dio.challenge.domain.*;

public class Main {
    public static void main(String[] args) {
        Course course1 = new Course();

        course1.setTitle("java course");
        course1.setDescription("java course description");
        course1.setWorkload(8);

        System.out.println(course1);
    }
}