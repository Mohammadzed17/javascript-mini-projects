// Get Elements
const chemistry = document.getElementById("chemistry");
const physics = document.getElementById("physics");
const maths = document.getElementById("maths");
const english = document.getElementById("english");
const computer = document.getElementById("computer");

const result = document.getElementById("result");

// Function to calculate average
function calculateAverage(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total / marks.length;
}

// Function to assign grade
function getGrade(avg) {
    if (avg >= 80) return "A+";
    else if (avg >= 70) return "B+";
    else if (avg >= 60) return "C+";
    else if (avg >= 50) return "D+";
    else return "Fail";
}

// Main function to show result
function show() {

    // Read input values here
    let marks = [
        Number(chemistry.value),
        Number(physics.value),
        Number(maths.value),
        Number(english.value),
        Number(computer.value)
    ];

    let avg = calculateAverage(marks);
    let grade = getGrade(avg);

    result.textContent = `Average Marks: ${avg} | Grade: ${grade}`;
}
