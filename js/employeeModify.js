import { EmployeeModifyController } from '../controllers/employeeModifyController.js';
import { Employee } from '../models/employee.js';

class View {    
    employeeTypes = {}

    addEmployee(employee) {
        const ul = document.getElementById('menu-employees-list');
        const li = document.createElement('li');
        li.id = `employee-${employee.employeeID}`;
        li.dataset.employee = JSON.stringify(employee);

        // Create text content for the employee with clickable event
        const empText = document.createElement('span');
        empText.textContent = `${employee.employeeID}: ${employee.getFullName()}`;
        empText.style.cursor = 'pointer';
        empText.addEventListener('click', () => this.toggleEmployeeDetails(employee, li));

        // Append the text node to the list
        li.appendChild(empText);

        // Add delete button
        // const deleteButton = document.createElement('button');
        // deleteButton.textContent = 'Delete';
        // deleteButton.addEventListener('click', () => {
        //     controller.removeEmployee(employee.employeeID);
        // });
        // li.appendChild(deleteButton);
        
        ul.appendChild(li);

        // Add to dropdown
        const dropdown = document.getElementById('employee-dropdown');
        const option = document.createElement('option');
        option.value = employee.employeeID;
        option.textContent = employee.getFullName();
        dropdown.appendChild(option);
    }

    toggleEmployeeDetails(employee, listItem) {
        let detailsDiv = listItem.querySelector('.details');
        if (!detailsDiv) {
            // Create details div if it doesn't exist
            detailsDiv = document.createElement('div');
            detailsDiv.className = 'details';
    
            // Create a table element
            const detailsTable = document.createElement('table');
            
            // Helper function to insert rows in the table
            const insertDetailRow = (table, key, value) => {
                let row = table.insertRow();
                let cellKey = row.insertCell(0);
                let cellValue = row.insertCell(1);
                cellKey.textContent = key;
                cellValue.textContent = value;
                cellKey.className = 'employee-detail-key';
                cellValue.className = 'employee-detail-value';
            };
            const typeName = this.employeeTypes[employee.typeID] || 'Unknown Type';
    
            // Insert rows into the table
            insertDetailRow(detailsTable, 'PIN', employee.pin);
            insertDetailRow(detailsTable, 'Type', typeName);
            insertDetailRow(detailsTable, 'Address', employee.getAddress());
            insertDetailRow(detailsTable, 'Hourly Rate', employee.hourlyRate);
            insertDetailRow(detailsTable, 'Created At', employee.created_at);
            insertDetailRow(detailsTable, 'Updated At', employee.updated_at);
    
            detailsDiv.appendChild(detailsTable);
            detailsDiv.style.display = 'none';
            listItem.appendChild(detailsDiv);
        }
        
        // Toggle the visibility of the details div
        detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
    }
    
    updateEmployee(id, updatedEmployee) {
        const li = document.getElementById(`employee-${id}`);
        if (li) {
            li.textContent = `${updatedEmployee.employeeID}: ${updatedEmployee.firstName}`;
        }

        // Update dropdown option text if needed
        const option = document.querySelector(`#employee-dropdown option[value="${id}"]`);
        if (option) {
            option.textContent = updatedEmployee.firstName;
        }
    }

    removeEmployee(id) {
        const li = document.getElementById(`employee-${id}`);
        if (li) {
            li.remove();
        }

        // Remove from dropdown
        const option = document.querySelector(`#employee-dropdown option[value="${id}"]`);
        if (option) {
            option.remove();
        }
    }

    populateInputs(employee) {
        // Set value of input fields or empty string if undefined (for new employee)
        document.getElementById('employee-first-name-input').value = employee.firstName || '';
        document.getElementById('employee-last-name-input').value = employee.lastName || '';
        document.getElementById('employee-pin-input').value = employee.pin || '';
        document.getElementById('employee-type-dropdown').value = employee.typeID || '';
        document.getElementById('employee-street-input').value = employee.street || '';
        document.getElementById('employee-city-input').value = employee.city || '';
        document.getElementById('employee-state-input').value = employee.state || '';
        document.getElementById('employee-zip-input').value = employee.zip || '';
        // const clockedState = employee.clockedIn === 1 ? 'In' : 'Out';
        // document.getElementById('employee-clocked-dropdown').value = clockedState;
        document.getElementById('employee-clocked-dropdown').value = employee.clockedIn.toString();
        document.getElementById('employee-hourly-rate').value = employee.hourlyRate || '';
    }
    
}

const view = new View();
const controller = new EmployeeModifyController(view, Employee);
let selectedItem = new Employee();

document.getElementById('employee-dropdown').addEventListener('change', (event) => {
    const selectedItemID = event.target.value;
    const li = document.getElementById(`employee-${selectedItemID}`);
    if (li) {
        selectedItem = JSON.parse(li.dataset.employee);
        view.populateInputs(selectedItem);
    }
});

document.getElementById('create-button').addEventListener('click', async () => {
    // Get current time
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    const data = {
        firstName: document.getElementById('employee-first-name-input').value,
        lastName: document.getElementById('employee-last-name-input').value,
        pin: document.getElementById('employee-pin-input').value,
        typeID: document.getElementById('employee-type-dropdown').value,
        street: document.getElementById('employee-street-input').value,
        city: document.getElementById('employee-city-input').value,
        state: document.getElementById('employee-state-input').value,
        zip: document.getElementById('employee-zip-input').value,
        clockedIn: document.getElementById('employee-clocked-dropdown').value,
        hourlyRate: document.getElementById('employee-hourly-rate').value,
        created_at: dateTime,
        updated_at: dateTime,
        isDeleted: 0
    };
    await controller.addEmployee(data);
    window.location.reload();
});


document.getElementById('update-button').addEventListener('click', async () => {
    // Get current time
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time+'';

    // Clock in state
    // const clockedDropdownValue = document.getElementById('employee-clocked-dropdown').value;
    // const clockedInValue = clockedDropdownValue === 'In' ? 1 : 0;
    const clockedInValue = document.getElementById('employee-clocked-dropdown').value;


    const id = selectedItem.employeeID;
    const data = {
        employeeID: selectedItem.employeeID,
        firstName: document.getElementById('employee-first-name-input').value,
        lastName: document.getElementById('employee-last-name-input').value,
        pin: document.getElementById('employee-pin-input').value,
        typeID: document.getElementById('employee-type-dropdown').value,
        street: document.getElementById('employee-street-input').value,
        city: document.getElementById('employee-city-input').value,
        state: document.getElementById('employee-state-input').value,
        zip: document.getElementById('employee-zip-input').value,
        clockedIn: clockedInValue,
        hourlyRate: document.getElementById('employee-hourly-rate').value,
        created_at: selectedItem.created_at,
        updated_at: dateTime,
        isDeleted: 0
    };
    await controller.editEmployee(id, data);
    window.location.reload();
});

document.getElementById('delete-button').addEventListener('click', async () => {
    // Get current time
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time+'';

    // Clock in state
    // const clockedDropdownValue = document.getElementById('employee-clocked-dropdown').value;
    // const clockedInValue = clockedDropdownValue === 'In' ? 1 : 0;
    const clockedInValue = document.getElementById('employee-clocked-dropdown').value;


    const id = selectedItem.employeeID;
    const data = {
        employeeID: selectedItem.employeeID,
        firstName: document.getElementById('employee-first-name-input').value,
        lastName: document.getElementById('employee-last-name-input').value,
        pin: document.getElementById('employee-pin-input').value,
        typeID: document.getElementById('employee-type-dropdown').value,
        street: document.getElementById('employee-street-input').value,
        city: document.getElementById('employee-city-input').value,
        state: document.getElementById('employee-state-input').value,
        zip: document.getElementById('employee-zip-input').value,
        clockedIn: clockedInValue,
        hourlyRate: document.getElementById('employee-hourly-rate').value,
        created_at: selectedItem.created_at,
        updated_at: dateTime,
        isDeleted: 1
    };
    console.log(data);
    await controller.editEmployee(id, data);
    window.location.reload();
});


// document.getElementById('delete-button').addEventListener('click', async () => {
//     const id = document.getElementById('employee-dropdown').value;
//     await controller.removeEmployee(id);
//     window.location.reload();
// });
