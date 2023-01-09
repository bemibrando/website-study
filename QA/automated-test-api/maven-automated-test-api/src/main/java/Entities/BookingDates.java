package Entities;

public class BookingDates {
    private String checkout;
    private String checkin;

    public BookingDates(String checkin, String checkout){
        this.checkin = checkin;
        this.checkout = checkout;
    }

    public String getCheckout() {
        return checkout;
    }
    public void setCheckout(String checkout) {
        this.checkout = checkout;
    }

    public String getCheckin() {
        return checkin;
    }
    public void setCheckin(String checkin) {
        this.checkin = checkin;
    }
}
