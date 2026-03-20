let courseActions = {
  enroll: function(student) {
    console.log(`${student} has been enrolled in the course.`);
  },
  completeCourse: function(student) {
    console.log(`${student} has completed the course.`);
  },
  getCertificate: function(student) {
    console.log(`${student} has received the certificate.`);
  }
};

courseActions.enroll("Rahul");
courseActions.completeCourse("Rahul");
courseActions.getCertificate("Rahul");
