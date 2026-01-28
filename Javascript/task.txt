let role = "Intern";

switch (role) {
    case "HR":
        function hrRole() {
            console.log("HR is responsible for employee relations and recruitment.");
        }
        hrRole();
        break;

    case "Manager":
        let managerRole = function() {
            console.log("Manager is responsible for handling team tasks.");
        };
        managerRole();
        break;

    case "Intern":
        (function() {
            console.log("Intern is responsible for learning and assisting with tasks.");
        })();
        break;

    case "Developer":
        let developerRole = () => {
            console.log("Developer is responsible for writing and maintaining code.");
        };
        developerRole();
        break;

}