import { EmployeeLoginController } from '../controllers/employeeLoginController.js';

const employeeController = new EmployeeLoginController();

document.addEventListener('DOMContentLoaded', () => {
    let clockedIn = false;
    let clockInTime;
    let timerInterval;
    
    const pinInput = document.getElementById('pin-input');
    const clockButton = document.getElementById('clock-button');
    const pinToggle = document.getElementById('pin-toggle');
    const pinCells = document.querySelectorAll('.pin-cell');
    const clearButton = document.getElementById('clear-button');
    const clockInTimeDisplay = document.getElementById('clock-in-time');
    const elapsedTimeDisplay = document.getElementById('elapsed-time');
    const hoursWorkedDisplay = document.getElementById('hours-worked');

    pinCells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (pinInput.value.length < 4) {
                pinInput.value += cell.getAttribute('data-value');
            }
        });
    });

    clearButton.addEventListener('click', () => {
        pinInput.value = '';
    });

    clockButton.addEventListener('click', async () => {
        const pin = pinInput.value;
        const matchingEmployees = await employeeController.findEmployeesWithMatchingPIN(pin);
        
        if (matchingEmployees) {
            // Successful login
            console.log('Login successful:', matchingEmployees);
        } else {
            // Failed Login
            console.log('No employee found with this PIN.');
        }
        // Clear input value after button click
        pinInput.value = '';

        if (!clockedIn) {
            // Clock in
            clockInTime = new Date();
            clockInTimeDisplay.textContent = `Clock In Time: ${clockInTime.toLocaleTimeString()}`;
            clockButton.textContent = 'Clock Out';

            // Start the elapsed time timer
            timerInterval = setInterval(() => {
                const now = new Date();
                const elapsed = new Date(now - clockInTime);
                elapsedTimeDisplay.textContent = `Elapsed Time: ${elapsed.getUTCHours()}:${elapsed.getUTCMinutes()}:${elapsed.getUTCSeconds()}`;
            }, 1000);

            // Need to update the "My Week" section here


            clockedIn = true;
        } else {
            // Clock out
            clearInterval(timerInterval);
            clockButton.textContent = 'Clock In';

            // Calculate total hours worked and update display
            const clockOutTime = new Date();
            const workedHours = (clockOutTime - clockInTime) / 3600000; // Convert milliseconds to hours

            // Update hours worked
            let currentHours = parseFloat(hoursWorkedDisplay.textContent);
            currentHours += workedHours;
            hoursWorkedDisplay.textContent = currentHours.toFixed(2); // Assuming two decimal places for hours

            // Update earnings
            // Need to fetch this from database
            const hourlyRate = 15;
            const earnings = currentHours * hourlyRate;
            document.getElementById('estimated-earnings').textContent = `$${earnings.toFixed(2)}`;

            // Here we could update tips and shifts worked

            
            // Reset the clock-in time and elapsed time displays
            clockInTimeDisplay.textContent = 'Clock In Time: --:--:--';
            elapsedTimeDisplay.textContent = 'Elapsed Time: --:--:--';

            clockedIn = false;
        }
    });

        // Event listener to toggle pin visibility
        pinToggle.addEventListener('click', () => {
            if (pinInput.type === 'password') {
                pinInput.type = 'text';
                pinToggle.classList.remove('fa-eye-slash');
                pinToggle.classList.add('fa-eye');
            } else {
                pinInput.type = 'password';
                pinToggle.classList.remove('fa-eye');
                pinToggle.classList.add('fa-eye-slash');
            }
        });
});

