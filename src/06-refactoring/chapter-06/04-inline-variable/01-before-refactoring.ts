namespace Chapter06BeforeRefactoring {
  function isBiggerPrice(order) {
    let basePrice = order.basePrice;
    return basePrice > 1000;
  }
}