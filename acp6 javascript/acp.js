const student = {
    name: "Shubham",
    age: 14,
    subjects: ["Math", "Science", "English"],
    hobbies: ["Cricket", "Football", "Gaming"]
};

let output = "";

output += "<p>Subject at index 0: " + student.subjects[0] + "</p>"; 
output += "<p>Hobby at index 1: " + student.hobbies[1] + "</p>";   
output += "<p>Subjects joined: " + student.subjects.join(", ") + "</p>"; 
output += "<p>Hobbies joined: " + student.hobbies.join(" - ") + "</p>"; 

let poppedHobby = student.hobbies.pop();
output += "<p>Popped hobby: " + poppedHobby + "</p>"; 
output += "<p>Hobbies after pop: " + student.hobbies.join(", ") + "</p>"; 

document.getElementById("output").innerHTML = output;
