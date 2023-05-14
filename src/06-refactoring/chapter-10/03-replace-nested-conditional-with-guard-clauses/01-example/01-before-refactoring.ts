namespace Chapter10BeforeRefactoring {
  function payAmount(employee) {
    let result;
    if (employee.isSeparated) {
      result = { amount: 0, reasonCode: 'SEP' }
    } else {
      if (employee.isRetired) {
        result = { amount: 0, reasonCode: "RET" }
      } else {
        return someFinalComputation()
      }
    }

    return result;
    
    function someFinalComputation() {
      return { amount: 9788, reasonCode: "" };
    }
  }
}