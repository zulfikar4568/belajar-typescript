namespace Chapter06AfterRefactoring {
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  function enrichReading(original) {
    const result = deepClone(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
    return result;

    function calculateBaseCharge(reading) {
      baseRate(reading.month, reading.year) * reading.quantity
    }
  }

  function acquireReading() {
    return { customer: "irvan", quantity: 10, month: 5, year: 2017 };
  }
  
  function baseRate(month: number, year: number) {
    return month + year;
  }
  
  function taxThreshold(year: number) {
    return year < 2020 ? 1 : 0.5;
  }
  
  // Client 1
  const rawReading1 = acquireReading()
  const reading1 = enrichReading(rawReading1)
  const baseCharge = reading1.baseCharge;
  
  // Client 2
  const rawReading2 = acquireReading()
  const reading2 = enrichReading(rawReading2)
  const taxableCharge = reading2.taxableCharge;
  
  // Client 3
  const rawReading3 = acquireReading()
  const reading3 = enrichReading(rawReading3)
  const basicChargeAmount = reading3.baseCharge
}