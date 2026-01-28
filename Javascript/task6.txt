function classRoom(className) {
  let teacher = "Mr. Sharma"; 

  function markAttendance(student) {
    console.log(`${student} marked present in ${className} by Teacher ${teacher}`);
  }

  return markAttendance; 
}
let attend = classRoom("10th Grade");
attend("Sita");
