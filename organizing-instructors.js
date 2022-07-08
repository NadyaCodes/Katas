// given a list of instructors and we will create a single object to organize them based on their course.


const organizeInstructors = function(instructors) {
  const instructorsObj = {};

  for (let i = 0; i < instructors.length; i++) {
    let currentCourse = instructors[i].course;

    if (instructorsObj[currentCourse]) {
      instructorsObj[currentCourse].push(instructors[i].name);
    }

    if (!instructorsObj[currentCourse]) {
      instructorsObj[currentCourse] = [];
      instructorsObj[currentCourse].push(instructors[i].name);
    }
  }

  return instructorsObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }