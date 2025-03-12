// // Function to get heading with corrected string interpolation
// function getHeading(dataJSON) {
//   const first = dataJSON.FirstName;
//   const last = dataJSON.LastName;
//   const dob = String(dataJSON.DOB);
//   const group = dataJSON.Group;
//   return `Data Table - ${first} ${last}`;
// }

// // console.log(getHeading(userGroups[0])); // Logs: "Data Table - melinda miller"

// // DEBUGGIN
// // dataJSON = {};
// // const COLS = 4;
// // const headingNames = ['FirstName', 'LastName', 'DOB', 'Group']
 
// // Event listener for form submission
// document.getElementById("userForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   const firstName = document.getElementById("firstName").value.trim().toLowerCase();
//   const lastName = document.getElementById("lastName").value.trim().toLowerCase();
//   const dob = document.getElementById("dob").value.trim();

//   const user = userGroups.find(user =>
//       user.FirstName.toLowerCase() === firstName &&
//       user.LastName.trim().toLowerCase() === lastName &&
//       user.DOB === dob
//   );
  
//   if (user) {
//     console.log(`User Found: ${user.FirstName || user.fname} ${user.LastName?.trim() || user.lname?.trim()}`);
//     console.log(`Group Number: ${user.Group}`);
//     document.getElementById("result").textContent = `Your Group: ${user.Group}`;
//   } else {
//     console.log("No matching group found");
//     document.getElementById("result").textContent = "No matching group found";
//   }

//   document.getElementById("result").textContent = user ? 
//       `Your Group: ${user.Group}` : 
//       "No matching group found";
// });
 


let userGroups = []; // Store JSON data globally

// Function to load JSON data
async function loadUserData() {
    try {
        const response = await fetch("data.json");
        userGroups = await response.json();
        console.log("User Data Loaded:", userGroups);
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
}

// Load user data when the page loads
loadUserData();

// Form submission event
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim().toLowerCase();
    const lastName = document.getElementById("lastName").value.trim().toLowerCase();
    const dob = document.getElementById("dob").value.trim();

    // Ensure JSON is loaded before searching
    if (!userGroups.length) {
        console.log("User data is not loaded yet.");
        return;
    }

    const user = userGroups.find(user =>
        (user.FirstName?.toLowerCase() || user.firstName?.toLowerCase()) === firstName &&
        (user.LastName?.trim().toLowerCase() || user.firstName?.trim().toLowerCase()) === lastName &&
        user.DOB === dob
    );

    console.log(userGroups)
    if (user) {
        console.log(`User Found: ${user.FirstName || user.firstName} ${user.LastName?.trim() || user.lastName?.trim()}`);
        console.log(`Group Number: ${user.Group}`);
        document.getElementById("result").textContent = `Your Group: ${user.Group}`;
    } else {
        console.log("No matching group found");
        document.getElementById("result").textContent = "No matching group found";
    }
});


 
 