function hospital() {
  let hospitalName = "CityCare Hospital"; 

  function admit(patientName) {
    console.log(`${patientName} admitted to ${hospitalName}`);
  }

  return admit; 
}

hospital()("Alice");
