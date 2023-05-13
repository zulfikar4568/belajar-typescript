namespace Chapter06AfterRefactoring {
  function printOwing(invoice: any) {
  
    printBaner();
    const outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    printDetails(invoice, outstanding);
  
    function printBaner() {
      console.log("***********************");
      console.log("**** Customer Owes ****");
      console.log("***********************");
    }
  
    function calculateOutstanding(invoice) {
      let result = 0;
      for (const o of invoice.orders) {
        result += o.amount;
      }
      return result;
    }
  
    function recordDueDate(invoice) {
      const today = new Date();
      invoice.dueDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
      );
    }
  
    function printDetails(invoice, outstanding) {
      console.log(`name: ${invoice.customer}`);
      console.log(`amount: ${outstanding}`);
      console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
    }
  }
}


