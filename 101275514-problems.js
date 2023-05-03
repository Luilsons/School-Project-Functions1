"use strict";

// Function 1: Circle Constructor
function Circle(radius) {
  this.radius = radius;

  this.area = function () {

    const  area = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
   
    return  parseFloat(area)
  };

  this.perimeter = function () {
    const p = (2 * Math.PI * this.radius).toFixed(2);
    return parseFloat(p)
  };
}

let c1 = new Circle(0);
console.log(c1.area());
console.log(c1.perimeter());

let c2 = new Circle(7);
console.log(c2.area());
console.log(c2.perimeter());

let c3 = new Circle(9);
console.log(c3.area());
console.log(c3.perimeter());

// Function 2: Lucky Seven
const calculateSalary = (hoursWorked) => {
  const salary = hoursWorked.reduce((total, hours, index) => {
    if (index < 5) {
      // Monday to Friday
      if (hours > 8) {
        total += 8 * 10 + (hours - 8) * 15;
      } else {
        total += hours * 10;
      }
    } else {
      // Saturday and Sunday
      if (hours > 8) {
        total += 8 * 20 + (hours - 8) * 30;
      }else {
        total += hours * 20;
      }
    }
    return total;
  }, 0);

  return salary;
};

console.log(calculateSalary([8, 8, 8, 8, 8, 0, 0]));
console.log(calculateSalary([10, 10, 10, 0, 8, 0, 0]));
console.log(calculateSalary([0, 0, 0, 0, 0, 12, 0]));

// // Function 3: Index Multiplier
  function indexMultiplier(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i=i+1) {
    total = total + arr[i] * i;
  }
  return total;
}

console.log(indexMultiplier([1, 2, 3, 4, 5]));
console.log(indexMultiplier([-3, 0, 8, -6]));
console.log(indexMultiplier([15, 16, -100, 50]));

// // Function 4:
const filteredJSON = (arr) => {
  const filteredArray = arr.filter((item) => {
    const startsWithMZ = /^[M-Z]/i.test(item.u);
    const isGreaterThan10 = item.id > 10;
    return startsWithMZ && isGreaterThan10;
  });
  return filteredArray;
};

console.log(filteredJSON([{ id: 1, u: "batman" }]));
console.log(filteredJSON([{ id: 11, u: "spidey" }]));
console.log(
  filteredJSON([
    { id: 1, u: "batman" },
    { id: 11, u: "spidey" },
  ])
);

// // Function 5: Break Array
const breakAway = function (arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    const chunk = arr.slice(i, i + n);
    result.push(chunk);
  }
  return result;
};

console.log(breakAway([2, 3, 4, 5], 2));
console.log(breakAway([2, 3, 4, 5, 6], 2));
console.log(breakAway([2, 3, 4, 5, 6, 7], 3));
console.log(breakAway([2, 3, 4, 5], 1));
console.log(breakAway([2, 3, 4, 5, 6, 7], 7));

