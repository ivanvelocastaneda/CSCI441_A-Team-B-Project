import { EmployeeModifyController } from '../controllers/employeeModifyController.js';
import { Employee } from '../models/employee.js';

class View {
    addEmployee(employee) {
        const ul = document.getElementById('menu-employees-list');
        const li = document.createElement('li');
        li.id = `item-${employee.employeeID}`;
        li.textContent = `${employee.employeeID}: ${employee.firstName} - ${employee.lastName} - ${employee.typeID}`;
        li.dataset.menuItem = JSON.stringify(employee);

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            controller.removeEmployee(employee.employeeID);
        });
        li.appendChild(deleteButton);
        
        ul.appendChild(li);

        // Add to dropdown
        const dropdown = document.getElementById('employee-dropdown');
        const option = document.createElement('option');
        option.value = employee.employeeID;
        option.textContent = employee.firstName;
        dropdown.appendChild(option);
    }

    updateEmployee(id, updatedItem) {
        const li = document.getElementById(`item-${id}`);
        if (li) {
            li.textContent = `${updatedItem.employeeID}: ${updatedItem.firstName}`;
        }

        // Update dropdown option text if needed
        const option = document.querySelector(`#employee-dropdown option[value="${id}"]`);
        if (option) {
            option.textContent = updatedItem.firstName;
        }
    }

    removeEmployee(id) {
        const li = document.getElementById(`item-${id}`);
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
        document.getElementById('employee-first-name-input').value = employee.firstName;
        document.getElementById('employee-last-name-input').value = employee.lastName;
    }
}

const view = new View();
const controller = new EmployeeModifyController(view, Employee);
let selectedItem = new Employee();

document.getElementById('employee-dropdown').addEventListener('change', (event) => {
    const selectedItemID = event.target.value;
    const li = document.getElementById(`item-${selectedItemID}`);
    if (li) {
        selectedItem = JSON.parse(li.dataset.employee);
        view.populateInputs(selectedItem);
    }
});

document.getElementById('create-button').addEventListener('click', async () => {
    const data = {
        itemName: document.getElementById('item-name-input').value,
        description: document.getElementById('description-input').value,
        price: parseFloat(document.getElementById('price-input').value),
        itemImage: document.getElementById('image-input').value
    };
    await controller.addMenuItem(data);
    window.location.reload();
    // controller.addMenuItem(data);
});


document.getElementById('update-button').addEventListener('click', async () => {
    const id = document.getElementById('menu-item-dropdown').value;
    const data = {
        employeeFirstName: document.getElementById('employee-first-name-input').value,
        employeeLastName: document.getElementById('employee-last-name-input').value,
    };
    await controller.editEmployee(id, data);  // Wait for the update to complete
    window.location.reload();
});


// Assuming you still want the delete functionality
document.getElementById('delete-button').addEventListener('click', async () => {
    const id = document.getElementById('employee-dropdown').value;
    await controller.removeEmployee(id);
    window.location.reload();
});
