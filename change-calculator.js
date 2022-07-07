//a function that can calculate which coins we should use when we need to give change.
//return an object which describes the total amount of change for the cashier to give back
//Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)


const findChange = (changeLeft, value, num, changeObj) => {
  while (changeLeft >= num) {
    if (!changeObj[value]) {
      changeObj[value] = 0;
    }
    changeObj[value] += 1;
    changeLeft = changeLeft - num;

  }
  return changeLeft;
};

const calculateChange = function(total, cash) {
  let changeLeft = cash - total;
  const changeObj = {};


  changeLeft = findChange(changeLeft, "twentyDollar", 2000, changeObj);
  changeLeft = findChange(changeLeft, "tenDollar", 1000, changeObj);
  changeLeft = findChange(changeLeft, "fiveDollar", 500, changeObj);
  changeLeft = findChange(changeLeft, "twoDollar", 200, changeObj);
  changeLeft = findChange(changeLeft, "oneDollar", 100, changeObj);
  changeLeft = findChange(changeLeft, "quarter", 25, changeObj);
  changeLeft = findChange(changeLeft, "dime", 10, changeObj);
  changeLeft = findChange(changeLeft, "nickel", 5, changeObj);
  findChange(changeLeft, "penny", 1, changeObj);

  return changeObj;
};

console.log(calculateChange(1787, 2000));
// { twoDollar: 1, dime: 1, penny: 3 }

console.log(calculateChange(2623, 4000));
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }

console.log(calculateChange(501, 1000));
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }