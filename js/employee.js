const pinInput = document.getElementById("pin-input");
const clockButton = document.getElementById("clock-button");
const breakButton = document.getElementById("break-button"); // Adding the break button
const clockInTimeDisplay = document.getElementById("clock-in-time");
const elapsedTimeDisplay = document.getElementById("elapsed-time");

const correctPIN = "1234"; // Change this to your desired PIN

let clockedIn = false;
let onBreak = false; // Setting the initial break state to false
let clockInTimestamp = null;
let timerInterval;

clockButton.addEventListener("click", () => {
    if (clockedIn && !onBreak) {
        // Handle Clock Out
        clockedIn = false;
        clockInTimestamp = null;
        clockInTimeDisplay.textContent = "Clock In Time: --:--:--";
        clockButton.textContent = "Clock In";
        elapsedTimeDisplay.textContent = "Elapsed Time: --:--:--";
        clearInterval(timerInterval);
        breakButton.style.display = "none"; // Hide the "Take a Break" button when clocking out
    } else {
        const enteredPIN = pinInput.value;
        if (enteredPIN === correctPIN) {
            if (!clockedIn) {
                // Handle Clock In
                clockedIn = true;
                clockInTimestamp = new Date();
                clockInTimeDisplay.textContent = `Clock In Time: ${formatTime(clockInTimestamp)}`;
                clockButton.textContent = "Clock Out";
                startTimer();
                breakButton.style.display = "inline"; // Show the "Take a Break" button when clocking in
            } else if (onBreak) {
                // Handle Resume Work
                onBreak = false;
                breakButton.textContent = "Take a Break";
            }
        } else {
            alert("Invalid PIN. Please try again.");
        }
        pinInput.value = ""; // Clear the PIN input
    }
});

breakButton.addEventListener("click", () => {
    if (clockedIn) {
        if (!onBreak) {
            // Handle Take a Break
            onBreak = true;
            breakButton.textContent = "Resume Work";
        } else {
            // Handle Resume Work
            onBreak = false;
            breakButton.textContent = "Take a Break";
        }
    }
});

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



function updateCurrentDate() {
    const currentDateElement = document.getElementById("current-date");
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    currentDateElement.textContent = `${formattedDate}`;
}

// Call the function to update the current date when the page loads
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

