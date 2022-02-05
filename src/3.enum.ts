//enum

// numeric enums
enum Month {
  JAN,
  FEB,
  MAR,
  APR,
  MAY
}

console.log(Month);
console.log(Month.JAN);

enum Month2 {
  JAN = 10,
  FEB,
  MAR = 90,
  APR,
  MAY
}
console.log(Month2);

//string enums
enum MonthString {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "Maret",
  APR = "April",
  MAY = "Mei"
}

console.log(MonthString);
console.log(MonthString.MAY);