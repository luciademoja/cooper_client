function CooperTest(){
};

CooperTest.prototype.testResults = function (obj) {
  var gender = obj.gender;
  var age = obj.age;
  var distance = obj.distance;

  if(obj.gender === 'male'){
    maleResults(obj);
  }else {
    femaleResults(obj);
  }
};

Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this >= min && this <= max;
};

function getRanges(obj) {
  return {
    one: obj.age >= 13 && obj.age <= 14,
    two: obj.age >= 15 && obj.age <= 16,
    three: obj.age >= 17 && obj.age <= 20,
    four: obj.age >= 21 && obj.age <= 29,
    five: obj.age >= 30 && obj.age <= 39,
    six: obj.age >= 40 && obj.age <= 49,
    seven: obj.age >= 50
  };
}

function maleResults (obj) {
  var ranges = getRanges(obj);
  var distance = obj.distance;
  var mDistRangeOne = {one: distance >= 2700,
                      two: distance.between(2400, 2699),
                      three: distance.between(2200, 2399),
                      four: distance.between(2100, 2199),
                      five: distance < 2100};
  var mDistRangeTwo = {one: distance >= 2800,
                      two: distance.between(2500, 2799),
                      three: distance.between(2300, 2499),
                      four: distance.between(2200, 2299),
                      five: distance < 2200};
  var mDistRangeThree = {one: distance >= 3000,
                      two: distance.between(2700, 2999),
                      three: distance.between(2500, 2699),
                      four: distance.between(2300, 2499),
                      five: distance < 2300};
  var mDistRangeFour = {one: distance >= 2800,
                      two: distance.between(2400, 2799),
                      three: distance.between(2200, 2399),
                      four: distance.between(1600, 2199),
                      five: distance < 1600};
  var mDistRangeFive = {one: distance >= 2700,
                      two: distance.between(2300, 2699),
                      three: distance.between(1900, 2299),
                      four: distance.between(1500, 1899),
                      five: distance < 1500};
  var mDistRangeSix = {one: distance >= 2500,
                      two: distance.between(2100, 2499),
                      three: distance.between(1700, 2099),
                      four: distance.between(1400, 1699),
                      five: distance < 1400};
  var mDistRangeSeven = {one: distance >= 2400,
                      two: distance.between(2000, 2399),
                      three: distance.between(1600, 1999),
                      four: distance.between(1300, 1599),
                      five: distance < 1300};

  if(ranges.one) {
    if(mDistRangeOne.one) {
    obj.message = "Very Good";
    }
    if(mDistRangeOne.two) {
    obj.message = "Good";
    }
    if(mDistRangeOne.three) {
    obj.message = "Average";
    }
    if(mDistRangeOne.four) {
    obj.message = "Bad";
    }
    if(mDistRangeOne.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.two) {
    if(mDistRangeTwo.one) {
    obj.message = "Very Good";
    }
    if(mDistRangeTwo.two) {
    obj.message = "Good";
    }
    if(mDistRangeTwo.three) {
    obj.message = "Average";
    }
    if(mDistRangeTwo.four) {
    obj.message = "Bad";
    }
    if(mDistRangeTwo.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.three) {
    if(mDistRangeThree.one) {
    obj.message = "Very Good";
    }
    if(mDistRangeThree.two) {
    obj.message = "Good";
    }
    if(mDistRangeThree.three) {
    obj.message = "Average";
    }
    if(mDistRangeThree.four) {
    obj.message = "Bad";
    }
    if(mDistRangeThree.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.four) {
    if(mDistRangeFour.one) {
    obj.message = "Very Good";
    }
    if(mDistRangeFour.two) {
    obj.message = "Good";
    }
    if(mDistRangeFour.three) {
    obj.message = "Average";
    }
    if(mDistRangeFour.four) {
    obj.message = "Bad";
    }
    if(mDistRangeFour.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.five) {
    if(mDistRangeFive.one) {
    obj.message = "Very Good";
    }
    if(mDistRangeFive.two) {
    obj.message = "Good";
    }
    if(mDistRangeFive.three) {
    obj.message = "Average";
    }
    if(mDistRangeFive.four) {
    obj.message = "Bad";
    }
    if(mDistRangeFive.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.six) {
    if(mDistRangeSix.one) {
    obj.message = "Very Good";
    }
    if(mDistRangeSix.two) {
    obj.message = "Good";
    }
    if(mDistRangeSix.three) {
    obj.message = "Average";
    }
    if(mDistRangeSix.four) {
    obj.message = "Bad";
    }
    if(mDistRangeSix.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.seven) {
    if(mDistRangeSeven.one) {
    obj.message = "Very Good";
    }
    if(mDistRangeSeven.two) {
    obj.message = "Good";
    }
    if(mDistRangeSeven.three) {
    obj.message = "Average";
    }
    if(mDistRangeSeven.four) {
    obj.message = "Bad";
    }
    if(mDistRangeSeven.five) {
    obj.message = "Very Bad";
    }
  }
}

function femaleResults (obj) {
  var ranges = getRanges(obj);
  var distance = obj.distance;
  var fDistRangeOne = {one: distance >= 2000,
                      two: distance.between(1900, 200),
                      three: distance.between(1600, 1899),
                      four: distance.between(1500, 1599),
                      five: distance < 1500};
  var fDistRangeTwo = {one: distance >= 2100,
                      two: distance.between(2000, 2099),
                      three: distance.between(1700, 1999),
                      four: distance.between(1600, 1699),
                      five: distance < 1600};
  var fDistRangeThree = {one: distance >= 2300,
                      two: distance.between(2100, 2299),
                      three: distance.between(1800, 2099),
                      four: distance.between(1700, 1799),
                      five: distance < 1700};
  var fDistRangeFour = {one: distance >= 2700,
                      two: distance.between(2200, 2699),
                      three: distance.between(1800, 2199),
                      four: distance.between(1500, 1799),
                      five: distance < 1500};
  var fDistRangeFive = {one: distance >= 2500,
                      two: distance.between(2000, 2499),
                      three: distance.between(1700, 1899),
                      four: distance.between(1400, 1699),
                      five: distance < 1400};
  var fDistRangeSix = {one: distance >= 2300,
                      two: distance.between(1900, 2299),
                      three: distance.between(1500, 1899),
                      four: distance.between(1200, 1499),
                      five: distance < 1200};
  var fDistRangeSeven = {one: distance >= 2200,
                      two: distance.between(1700, 2199),
                      three: distance.between(1400, 1699),
                      four: distance.between(1100, 1399),
                      five: distance < 1100};

  if(ranges.one) {
    if(fDistRangeOne.one) {
    obj.message = "Very Good";
    }
    if(fDistRangeOne.two) {
    obj.message = "Good";
    }
    if(fDistRangeOne.three) {
    obj.message = "Average";
    }
    if(fDistRangeOne.four) {
    obj.message = "Bad";
    }
    if(fDistRangeOne.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.two) {
    if(fDistRangeTwo.one) {
    obj.message = "Very Good";
    }
    if(fDistRangeTwo.two) {
    obj.message = "Good";
    }
    if(fDistRangeTwo.three) {
    obj.message = "Average";
    }
    if(fDistRangeTwo.four) {
    obj.message = "Bad";
    }
    if(fDistRangeTwo.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.three) {
    if(fDistRangeThree.one) {
    obj.message = "Very Good";
    }
    if(fDistRangeThree.two) {
    obj.message = "Good";
    }
    if(fDistRangeThree.three) {
    obj.message = "Average";
    }
    if(fDistRangeThree.four) {
    obj.message = "Bad";
    }
    if(fDistRangeThree.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.four) {
    if(fDistRangeFour.one) {
    obj.message = "Very Good";
    }
    if(fDistRangeFour.two) {
    obj.message = "Good";
    }
    if(fDistRangeFour.three) {
    obj.message = "Average";
    }
    if(fDistRangeFour.four) {
    obj.message = "Bad";
    }
    if(fDistRangeFour.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.five) {
    if(fDistRangeFive.one) {
    obj.message = "Very Good";
    }
    if(fDistRangeFive.two) {
    obj.message = "Good";
    }
    if(fDistRangeFive.three) {
    obj.message = "Average";
    }
    if(fDistRangeFive.four) {
    obj.message = "Bad";
    }
    if(fDistRangeFive.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.six) {
    if(fDistRangeSix.one) {
    obj.message = "Very Good";
    }
    if(fDistRangeSix.two) {
    obj.message = "Good";
    }
    if(fDistRangeSix.three) {
    obj.message = "Average";
    }
    if(fDistRangeSix.four) {
    obj.message = "Bad";
    }
    if(fDistRangeSix.five) {
    obj.message = "Very Bad";
    }
  }
  if(ranges.seven) {
    if(fDistRangeSeven.one) {
    obj.message = "Very Good";
    }
    if(fDistRangeSeven.two) {
    obj.message = "Good";
    }
    if(fDistRangeSeven.three) {
    obj.message = "Average";
    }
    if(fDistRangeSeven.four) {
    obj.message = "Bad";
    }
    if(fDistRangeSeven.five) {
    obj.message = "Very Bad";
    }
  }
}
