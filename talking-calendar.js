// Create a function that takes in a date string with the format YYYY/MM/DD
// returns a new human readable date that looks like December 2nd, 2017.

const findMonth = (date) => {
  let month = '';
  let monthNum = date.slice(5, -3);

  switch (monthNum) {
  case "01":
    month = "January";
    break;
  case "02":
    month = "February";
    break;
  case "03":
    month = "March";
    break;
  case "04":
    month = "April";
    break;
  case "05":
    month = "May";
    break;
  case "06":
    month = "June";
    break;
  case "07":
    month = "July";
    break;
  case "08":
    month = "August";
    break;
  case "09":
    month = "September";
    break;
  case "10":
    month = "October";
    break;
  case "11":
    month = "November";
    break;
  case "12":
    month = "December";
    break;
  }

  return month;
};

const findTag = (date) => {
  let day = date.slice(8);
  let tag = "th";

  if (day === "01" || day === "21" || day === "31") {
    tag = "st";
  }

  if (day === "02" || day === "22") {
    tag = "nd";
  }

  if (day === "03" || day === "23") {
    tag = "rd";
  }

  return tag;
};

const findDay = (date) => {
  let day = date.slice(8);
  
  if (day[0] === "0") {
    day = day.slice(1);
  }
  return day;
};
  

const talkingCalendar = function(date) {
  const month = findMonth(date);
  const day = findDay(date);
  const tag = findTag(date);
  const year = date.slice(0, -6);

  return `${month} ${day}${tag}, ${year}`;
  
};

console.log(talkingCalendar("2017/12/02"));
//December 2nd, 2017

console.log(talkingCalendar("2007/11/11"));
//November 11th, 2007

console.log(talkingCalendar("1987/08/24"));
//August 24th, 1987