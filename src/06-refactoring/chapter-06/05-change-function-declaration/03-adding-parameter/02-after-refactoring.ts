namespace Chapter06AfterRefactoring {
  class Book {
    private reservations: any[] = [];

    addReservation(customer: any) {
      return this.zz_addReservation(customer, false);
    }

    zz_addReservation(customer: any, isPriority: boolean) {
      return this.reservations.push(customer);
    }
  }
}