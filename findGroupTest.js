const userGroups = [
  {
    "FirstName": "melinda",
    "LastName": "miller   ",
    "DOB": "1/1/1958",
    "Group": 2
  },
  {
    "FirstName": "susan",
    "LastName": "goldstein   ",
    "DOB": "1/1/1958",
    "Group": 1
  },
  {
    "FirstName": "son",
    "LastName": "hong   ",
    "DOB": "1/1/1958",
    "Group": 1
  },
  {
    "FirstName": "fred",
    "LastName": "daniel   ",
    "DOB": "1/1/1959",
    "Group": 2
  },
  {
    "FirstName": "scott",
    "LastName": "gerber   ",
    "DOB": "1/6/1981",
    "Group": 4
  },
  {
    "FirstName": "jennifer",
    "LastName": "anderson   ",
    "DOB": "1/6/1981",
    "Group": 2
  },
  {
    "FirstName": "sarah",
    "LastName": "scarano   ",
    "DOB": "7/14/1994",
    "Group": 4
  },
  {
    "FirstName": "nia",
    "LastName": "drakes   ",
    "DOB": "7/15/1980",
    "Group": 3
  },
  {
    "FirstName": "patricia",
    "LastName": "price   ",
    "DOB": "9/21/1972",
    "Group": 3
  },
  {
    "FirstName": "scott",
    "LastName": "cooper   ",
    "DOB": "11/19/1957",
    "Group": 1
  },
  {
    "FirstName": "laura",
    "LastName": "noel   ",
    "DOB": "11/19/1957",
    "Group": 3
  },
  {
    "FirstName": "sarah",
    "LastName": "holaway jaymes  ",
    "DOB": "12/18/1991",
    "Group": 2
  },
  {
    "FirstName": "kelsey",
    "LastName": "abernathy   ",
    "DOB": "12/18/1992",
    "Group": 4
  }
 ]; 
 
 // CODE PEN
 console.log(userGroups[0].FirstName); // Logs: "melinda"
 
 // Event listener for form submission
 document.getElementById("userForm").addEventListener("submit", function(event) {
   event.preventDefault();
 
   const firstName = document.getElementById("firstName").value.trim().toLowerCase();
   const lastName = document.getElementById("lastName").value.trim().toLowerCase();
   const dob = document.getElementById("dob").value.trim();
 
   const user = userGroups.find(user =>
       user.FirstName.toLowerCase() === firstName &&
       user.LastName.trim().toLowerCase() === lastName &&
       user.DOB === dob
   );
   
   if (user) {
     console.log(`User Found: ${user.FirstName || user.fname} ${user.LastName?.trim() || user.lname?.trim()}`);
     console.log(`Group Number: ${user.Group}`);
     document.getElementById("result").textContent = `Your Group: ${user.Group}`;
   } else {
     console.log("No matching group found");
     document.getElementById("result").textContent = "No matching group found";
   }
 
   document.getElementById("result").textContent = user ? 
       `Your Group: ${user.Group}` : 
       "No matching group found";
 });
 
 // Function to get heading with corrected string interpolation
 function getHeading(dataJSON) {
   const first = dataJSON.FirstName;
   const last = dataJSON.LastName;
   const dob = String(dataJSON.DOB);
   const group = dataJSON.Group;
   return `Data Table - ${first} ${last}`;
 }
 
 console.log(getHeading(userGroups[0])); // Logs: "Data Table - melinda miller"
 
 