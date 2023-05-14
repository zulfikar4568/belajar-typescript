namespace Chapter10AfterRefactoring {
  function adjustedCapital(instrument) {
    if (instrument.capital <= 0 && instrument.duration <= 0 && instrument.duration <= 0) return 0;
    return (instrument.income / instrument.duration) * instrument.adjusmentFactor;
  }
}