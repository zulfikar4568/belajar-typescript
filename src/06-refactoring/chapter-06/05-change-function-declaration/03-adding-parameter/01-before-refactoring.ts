namespace Chapter06BeforeRefactoring {
  class Book {
    private reservations: any[] = [];

    addReservation(customer: any) {
      return this.reservations.push(customer);
    }
  }
}