const college = {
  name: "DC",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

// console.log(college.unique.color);
college["unique"].result = "top top rop most";
console.log(college.unique.result);
college.events[1] = "16 december";
console.log(college.events[1]);
delete college.class; //delete property
console.log(college);
