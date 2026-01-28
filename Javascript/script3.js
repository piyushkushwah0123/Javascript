function salaryTracker(name) {
  let history = []; 

  return function(salary) {
    history.push(salary); 
    console.log(`${name}'s salary history: [${history}]`);
  };
}

let johnSalary = salaryTracker("John");
johnSalary(3000);
johnSalary(3200);
johnSalary(3400);
johnSalary(3600);
johnSalary(3800);