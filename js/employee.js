const pinInput = document.getElementById("pin-input");
const clockButton = document.getElementById("clock-button");
const breakButton = document.getElementById("break-button");
const clockInTimeDisplay = document.getElementById("clock-in-time");
const elapsedTimeDisplay = document.getElementById("elapsed-time");
const hoursWorkedDisplay = document.getElementById("hours-worked");
const estimatedEarningsDisplay = document.getElementById("estimated-earnings");
const shiftWorkedDisplay = document.getElementById("shift-worked");

const correctPIN = "1234"; 
const payPerHour = 20; 

let clockedIn = false;
let onBreak = false;
let timerInterval;
let clockInTimestamp = null;
let breakStartTime = null;
let breakEndTime = null;
let shiftCount = 0; // Number of shifts worked

clockButton.addEventListener("click", () => {
    if (!clockedIn) {
        // Clock In
        const enteredPIN = pinInput.value;
        if (enteredPIN === correctPIN) {
            clockedIn = true;
            clockButton.textContent = "Clock Out";
            startTimer();
            breakButton.style.display = "inline";
            const currentTime = new Date();
            const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            clockInTimeDisplay.textContent = `Clock In Time: ${formattedTime}`;
        } else {
            alert("Invalid PIN. Please try again.");
        }
        pinInput.value = "";
    } else {
        // Clock Out
        clockedIn = false;
        clockButton.textContent = "Clock In";
        clearInterval(timerInterval);
        breakButton.style.display = "none";

        // Calculate elapsed time, hours worked, and estimated earnings
        const elapsedMilliseconds = Date.now() - clockInTimestamp;
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        const elapsedMinutes = Math.floor(elapsedSeconds / 60);
        const elapsedHours = Math.floor(elapsedMinutes / 60);
        const elapsedMinutesRemainder = elapsedMinutes % 60;
        const elapsedSecondsRemainder = elapsedSeconds % 60;

        const formattedElapsed =
            (elapsedHours > 0 ? `${elapsedHours} hr, ` : "") +
            (elapsedMinutesRemainder > 0 ? `${elapsedMinutesRemainder} min, ` : "") +
            (elapsedSecondsRemainder > 0 ? `${elapsedSecondsRemainder} sec` : "");

        hoursWorkedDisplay.textContent = `Hours Worked: ${0.0005}`;
        shiftCount++;
        
        shiftWorkedDisplay.textContent = `Shift Worked: ${shiftCount} shift(s)`;
        
        const estimatedEarnings = (payPerHour/ elapsedSeconds* 3600);
        estimatedEarningsDisplay.textContent = `Estimated Earnings: $${estimatedEarnings.toFixed(2)}`;
    }
});

breakButton.addEventListener("click", () => {
    if (!onBreak) {
        onBreak = true;
        breakStartTime = Date.now();
        breakButton.textContent = "End Break";
    } else {
        onBreak = false;
        breakEndTime = Date.now();
        const breakDuration = breakEndTime - breakStartTime;
        const breakMinutes = Math.floor(breakDuration / (1000 * 60));
        const breakSeconds = Math.floor((breakDuration / 1000) % 60);
        const formattedBreakTime = `${breakMinutes} minutes and ${breakSeconds} seconds`;

        // Update the break box with the break duration
        document.getElementById("hours-break").textContent = formattedBreakTime;

        alert(`Break: ${formattedBreakTime}`);
        breakButton.textContent = "Take a Break";
    }
});


function startTimer() {
    let startTime = Date.now();
    timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedMilliseconds = currentTime - startTime;
        elapsedTimeDisplay.textContent = `Elapsed Time: ${formatTime(Math.floor(elapsedMilliseconds / 1000))}`;
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const secondsRemainder = seconds % 60;
    const minutesRemainder = minutes % 60;

    return (
        (hours > 0 ? `${hours} hr, ` : "") +
        (minutesRemainder > 0 ? `${minutesRemainder} min, ` : "") +
        (secondsRemainder > 0 ? `${secondsRemainder} sec` : "")
    );
}

function updateCurrentDate() {
    const currentDateElement = document.getElementById("current-date");
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    currentDateElement.textContent = formattedDate;
}

updateCurrentDate();










function startTimer() {
    let startTime = Date.now();
    timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedMilliseconds = currentTime - startTime;
        elapsedTimeDisplay.textContent = `Elapsed Time: ${formatTime(elapsedMilliseconds)}`;
    }, 1000);
}

function formatTime(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


document.addEventListener("DOMContentLoaded", function() {
    const pinInput = document.getElementById('pin-input');
    const clockInButton = document.getElementById('clock-in-button');
    const clockInTime = document.getElementById('clock-in-time');
    const pinTableContainer = document.getElementById('pin-table-container');

    let pinCode = "";
    let clockedIn = false;

    // Function to handle PIN cell clicks
    function handlePinCellClick(event) {
        if (!clockedIn && event.target.classList.contains('pin-cell')) {
            const clickedCell = event.target;
            if (clickedCell.id === 'clear-button') {
                // If the "Clear" button is clicked, clear the PIN
                clearPin();
            } else {
                // Append the clicked number to the PIN input field
                pinCode += clickedCell.textContent;
                if (pinCode.length > 4) {
                    pinCode = pinCode.slice(0, 4); // Limit the PIN to 4 digits
                }
                updatePinDisplay();
            }
        }
    }

    // Function to update the PIN display
    function updatePinDisplay() {
        pinInput.value = pinCode;
    }

    // Function to handle "Clock In" button click
    function handleClockInClick() {
        if (!clockedIn) {
            if (pinCode.length === 4) {
                // Start the timer since the PIN is correct
                // Replace this with your timer logic
                console.log("Employee clocked in with PIN: " + pinCode);
                clockInButton.textContent = "Clock Out";
                clockedIn = true;
            } else {
                // Notify the employee to enter a valid 4-digit PIN
                alert("Please enter a valid 4-digit PIN");
            }
        } else {
            // Handle clocking out
            // Replace this with clock out logic if needed
            console.log("Employee clocked out");
            clockInButton.textContent = "Clock In";
            clockedIn = false;
        }
    }

    // Function to clear the PIN
    function clearPin() {
        pinCode = "";
        updatePinDisplay();
    }

    // Add event listeners
    pinTableContainer.addEventListener('click', handlePinCellClick);
    clockInButton.addEventListener('click', handleClockInClick);
});


// Function to handle PIN cell clicks
function handlePinCellClick(event) {
    if (!clockedIn && event.target.classList.contains('pin-cell')) {
        const clickedCell = event.target;
        if (clickedCell.id === 'clear-button') {
            // If the "Clear" button is clicked, clear the PIN
            clearPin();
        } else {
            // Append the clicked number to the PIN input field
            pinCode += clickedCell.textContent;
            if (pinCode.length > 4) {
                pinCode = pinCode.slice(0, 4); // Limit the PIN to 4 digits
            }
            updatePinDisplay();
        }
    }
}



function startTimer() {
    let startTime = Date.now();
    timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedMilliseconds = currentTime - startTime;
        elapsedTimeDisplay.textContent = `Elapsed Time: ${formatTime(elapsedMilliseconds)}`;
    }, 1000);
}

function formatTime(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


document.addEventListener("DOMContentLoaded", function() {
    const pinInput = document.getElementById('pin-input');
    const clockInButton = document.getElementById('clock-in-button');
    const clockInTime = document.getElementById('clock-in-time');
    const pinTableContainer = document.getElementById('pin-table-container');

    let pinCode = "";
    let clockedIn = false;

    // Function to handle PIN cell clicks
    function handlePinCellClick(event) {
        if (!clockedIn && event.target.classList.contains('pin-cell')) {
            const clickedCell = event.target;
            if (clickedCell.id === 'clear-button') {
                // If the "Clear" button is clicked, clear the PIN
                clearPin();
            } else {
                // Append the clicked number to the PIN input field
                pinCode += clickedCell.textContent;
                if (pinCode.length > 4) {
                    pinCode = pinCode.slice(0, 4); // Limit the PIN to 4 digits
                }
                updatePinDisplay();
            }
        }
    }

    // Function to update the PIN display
    function updatePinDisplay() {
        pinInput.value = pinCode;
    }

    // Function to handle "Clock In" button click
    function handleClockInClick() {
        if (!clockedIn) {
            if (pinCode.length === 4) {
                // Start the timer since the PIN is correct
                // Replace this with your timer logic
                console.log("Employee clocked in with PIN: " + pinCode);
                clockInButton.textContent = "Clock Out";
                clockedIn = true;
            } else {
                // Notify the employee to enter a valid 4-digit PIN
                alert("Please enter a valid 4-digit PIN");
            }
        } else {
            // Handle clocking out
            // Replace this with clock out logic if needed
            console.log("Employee clocked out");
            clockInButton.textContent = "Clock In";
            clockedIn = false;
        }
    }

    // Function to clear the PIN
    function clearPin() {
        pinCode = "";
        updatePinDisplay();
    }

    // Add event listeners
    pinTableContainer.addEventListener('click', handlePinCellClick);
    clockInButton.addEventListener('click', handleClockInClick);
});


// Function to handle PIN cell clicks
function handlePinCellClick(event) {
    if (!clockedIn && event.target.classList.contains('pin-cell')) {
        const clickedCell = event.target;
        if (clickedCell.id === 'clear-button') {
            // If the "Clear" button is clicked, clear the PIN
            clearPin();
        } else {
            // Append the clicked number to the PIN input field
            pinCode += clickedCell.textContent;
            if (pinCode.length > 4) {
                pinCode = pinCode.slice(0, 4); // Limit the PIN to 4 digits
            }
            updatePinDisplay();
        }
    }
}


function logout() {
    // Redirect to the initial home page
    window.location.href = 'index.html'; 
}

const logoutButton = document.getElementById("logout-button"); 

logoutButton.addEventListener("click", () => {
    
});



const employeeSchedulesData = [
    {
        name: "John Doe",
        schedule: "Monday"
    },
    {
        name: "Jane Smith",
        schedule: "Tuesday"
    },
    {
        name: "Michael Johnson",
        schedule: "Wednesday"
    },
    {
        name: "Susan Williams",
        schedule: "Thursday"
    },
    {
        name: "Robert Lee",
        schedule: "Friday"
    },
    {
        name: "Linda Martin",
        schedule: "Saturday"
    },
    {
        name: "David Wilson",
        schedule: "Sunday"
    },
    {
        name: "Mary Taylor",
        schedule: "Monday"
    },
    {
        name: "James Anderson",
        schedule: "Tuesday"
    },
    {
        name: "Jennifer Brown",
        schedule: "Wednesday"
    }
];

const dailyReportData = [
    {
        name: "John Doe",
        date: "2023-10-30",
        start: "08:00 AM",
        end: "04:00 PM",
        break: "30 minutes",
        work: "7 hours 30 minutes",
        overtime: "2 hours 30 minutes"
    },
    {
        name: "Jane Smith",
        date: "2023-10-30",
        start: "09:15 AM",
        end: "05:15 PM",
        break: "30 minutes",
        work: "7 hours",
        overtime: "2 hours 30 minutes"
    },
    {
        name: "Michael Johnson",
        date: "2023-10-30",
        start: "10:10 AM",
        end: "06:15 PM",
        break: "30 minutes",
        work: "7 hours 35 minutes",
        overtime: ""
    },
    {
        name: "Susan Williams",
        date: "2023-10-30",
        start: "09:20 AM",
        end: "05:10 PM",
        break: "30 minutes",
        work: "7 hours 20 minutes",
        overtime: ""
    },
    {
        name: "Robert Lee",
        date: "2023-10-30",
        start: "08:05 AM",
        end: "04:10 PM",
        break: "30 minutes",
        work: "7 hours 25 minutes",
        overtime: ""
    },
    {
        name: "Linda Martin",
        date: "2023-10-30",
        start: "10:25 AM",
        end: "06:05 PM",
        break: "30 minutes",
        work: "7 hours 10 minutes",
        overtime: ""
    },
    {
        name: "David Wilson",
        date: "2023-10-30",
        start: "11:10 AM",
        end: "07:15 PM",
        break: "30 minutes",
        work: "7 hours 5 minutes",
        overtime: ""
    },
    {
        name: "Mary Taylor",
        date: "2023-10-30",
        start: "08:15 AM",
        end: "04:15 PM",
        break: "30 minutes",
        work: "7 hours 30 minutes",
        overtime: ""
    },
    {
        name: "James Anderson",
        date: "2023-10-30",
        start: "12:10 PM",
        end: "08:10 PM",
        break: "30 minutes",
        work: "7 hours",
        overtime: "1 hour"
    },
    {
        name: "Jennifer Brown",
        date: "2023-10-30",
        start: "09:30 AM",
        end: "05:20 PM",
        break: "30 minutes",
        work: "7 hours 20 minutes",
        overtime: "1 hour"
    }
];

const employeeSchedulesTable = document.getElementById("employee-schedules");
const dailyReportTable = document.getElementById("daily-report");

function populateEmployeeSchedules() {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    for (const employee of employeeSchedulesData) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${employee.name}</td>`;
        
        for (const day of daysOfWeek) {
            const hasSchedule = employee.schedule.includes(day);
            row.innerHTML += `<td>${hasSchedule ? "-" : ""}</td>`;
        }

        employeeSchedulesTable.querySelector("tbody").appendChild(row);
    }
}

function populateDailyReport() {
    for (const entry of dailyReportData) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${getCurrentDate()}</td>
            <td>${entry.start}</td>
            <td>${entry.end}</td>
            <td>${entry.break}</td>
            <td>${entry.work}</td>
            <td>${entry.name === "James Anderson" || entry.name === "Jennifer Brown" ? entry.overtime : ""}</td>
        `;

        dailyReportTable.querySelector("tbody").appendChild(row);
    }
}

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

populateEmployeeSchedules();
populateDailyReport();