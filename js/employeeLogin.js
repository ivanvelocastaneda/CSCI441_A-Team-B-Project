import { EmployeeLoginController } from '../controllers/employeeLoginController.js';

const employeeController = new EmployeeLoginController();

document.addEventListener('DOMContentLoaded', () => {
    // let clockedIn = false;
    let clockInTime;
    
    const pinInput = document.getElementById('pin-input');
    const clockButton = document.getElementById('clock-button');
    const pinToggle = document.getElementById('pin-toggle');
    const pinCells = document.querySelectorAll('.pin-cell');
    const clearButton = document.getElementById('clear-button');
    const clockInTimeDisplay = document.getElementById('clock-in-time');
    // const elapsedTimeDisplay = document.getElementById('elapsed-time');
    const hoursWorkedDisplay = document.getElementById('hours-worked');
    const continueButton = document.getElementById('continue-button');


    pinCells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (pinInput.value.length < 4) {
                pinInput.value += cell.getAttribute('data-value');
            }
        });
    });

    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.style.top = '0';
        messageElement.style.width = '100%';
        messageElement.style.textAlign = 'center';
        messageElement.style.backgroundColor = 'grey';
        messageElement.style.padding = '10px';
        messageElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        messageElement.innerText = message;

        document.header.after(messageElement);
    
        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 10000);
    }

    async function setEmployeeState(employee, clockState) {
        // Get current time
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time+'';
    
        const id = employee.employeeID;
        const data = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            pin: employee.pin,
            typeID: employee.typeID,
            street: employee.street,
            city: employee.city,
            state: employee.state,
            zip: employee.zip,
            clockedIn: clockState,
            hourlyRate: employee.hourlyRate,
            created_at: employee.created_at,
            updated_at: dateTime,
            isDeleted: employee.isDeleted
        };
        await employeeController.editEmployee(id, data);
    };

    clearButton.addEventListener('click', () => {
        pinInput.value = '';
    });

    clockButton.addEventListener('click', async () => {
        const pin = pinInput.value;
        const matchingEmployees = await employeeController.findEmployeesWithMatchingPIN(pin);
        const clockedIn = matchingEmployees.clockedIn;
        clockInTime = new Date();
        
        if (matchingEmployees) {
            // Successful login
            console.log('Employee found:', matchingEmployees);
        } else {
            // Failed Login
            console.log('No employee found with this PIN.');
            displayMessage('No employee found');
        }
        // Clear input value after button click
        pinInput.value = '';

        if (!clockedIn) {
            // Clock in
            clockInTimeDisplay.textContent = `Clock In Time: ${clockInTime.toLocaleTimeString()}`;
            setEmployeeState(matchingEmployees, 1);

            displayMessage(`Welcome ${matchingEmployees.firstName}`);
            console.log('Clock in successful!');
        } else {
            // Clock out

            // Calculate total hours worked and update display
            const clockOutTime = new Date();
            const workedHours = (clockOutTime - clockInTime) / 3600000; // Convert milliseconds to hours

            // Update hours worked
            let currentHours = parseFloat(hoursWorkedDisplay.textContent);
            currentHours += workedHours;
            hoursWorkedDisplay.textContent = currentHours.toFixed(2); // Assuming two decimal places for hours

            // Update earnings
            const hourlyRate = matchingEmployees.hourlyRate;
            const earnings = currentHours * hourlyRate;
            document.getElementById('estimated-earnings').textContent = `$${earnings.toFixed(2)}`;


            setEmployeeState(matchingEmployees, 0);
            clockInTimeDisplay.textContent = `Clock Out Time: ${clockInTime.toLocaleTimeString()}`;

            displayMessage(`Bye ${matchingEmployees.firstName}`);
            console.log('Clock out successful!');
        }
    });

    continueButton.addEventListener('click', async () => {
        const pin = pinInput.value;
        const matchingEmployees = await employeeController.findEmployeesWithMatchingPIN(pin);

        if (matchingEmployees) {
            // Successful login, redirect to serverInterface2.html
            console.log('SUCCESS: Redirecting to employee interface...')
            window.location.href = './serverInterface2.html';
        } else {
            // Failed Login
            console.log('No employee found with this PIN.');
            displayMessage('No employee found');
        }
        // Clear input value after button click
        pinInput.value = '';
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

