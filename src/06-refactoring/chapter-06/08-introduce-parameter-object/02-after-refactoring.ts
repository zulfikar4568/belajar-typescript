namespace Chapter06AfterRefactoring {
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

  class NumberRange {
    private _data: {min: number, max: number}

    constructor(min: number, max: number) {
      this._data = { min, max}
    }

    get min() {
      return this._data.min
    }

    get max() {
      return this._data.max
    }

    constains(arg: number) {
      return arg >= this.min && arg <= this.max
    }
  }
  
  function readingOutsideRange(station: any, range: NumberRange) {
    return station.readings.filter((r: any) => !range.constains(r.temp))
  }
  
  const range = new NumberRange(40, 50)
  const alerts = readingOutsideRange(station, range)
  
  console.log(alerts);
}