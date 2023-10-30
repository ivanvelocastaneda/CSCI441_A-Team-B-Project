const pinInput = document.getElementById("pin-input");
const clockButton = document.getElementById("clock-button");
const breakButton = document.getElementById("break-button");
const clockInTimeDisplay = document.getElementById("clock-in-time");
const elapsedTimeDisplay = document.getElementById("elapsed-time");
const hoursWorkedDisplay = document.getElementById("hours-worked");
const estimatedEarningsDisplay = document.getElementById("estimated-earnings");
const shiftWorkedDisplay = document.getElementById("shift-worked");

const correctPIN = "1234"; // Change this to your desired PIN
const payPerHour = 20; // Change this to your desired pay rate per hour

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

        hoursWorkedDisplay.textContent = `Hours Worked: ${formattedElapsed}`;
        shiftCount++;
        shiftWorkedDisplay.textContent = `Shift Worked: ${shiftCount} shift(s)`;
        
        const estimatedEarnings = (payPerHour * elapsedSeconds) / 3600;
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