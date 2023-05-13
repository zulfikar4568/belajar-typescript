namespace Chapter06BeforeRefactoring {
  const station = {
    name: "ZB1",
    readings: [
        { temp: 47, time: "2016-11-10 09:10" },
        { temp: 53, time: "2016-11-10 09:10" },
        { temp: 58, time: "2016-11-10 09:10" },
        { temp: 53, time: "2016-11-10 09:10" },
        { temp: 51, time: "2016-11-10 09:10" },
    ],
  };
  
  function readingOutsideRange(station: any, min: number, max: number) {
    return station.readings.filter((r: any) => r.temp < min || r.temp > max)
  }
  
  const alerts = readingOutsideRange(station, 40, 50)
  
  console.log(alerts);
}