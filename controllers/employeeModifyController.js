import { fetchEmployees, createEmployee, updateEmployee, deleteEmployee, fetchEmployeeTypes } from '../models/api.js';

export class EmployeeModifyController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    async init() {
        // Fetch Employees
        try {
            const data = await fetchEmployees();
            data.forEach(employee => {
                const employeeData = new this.model(employee.employeeID, employee.pin, employee.typeID, employee.firstName, employee.lastName, employee.street, employee.city, employee.state, employee.zip, employee.created_at, employee.updated_at);
                this.view.addEmployee(employeeData);
            });
        } catch (error) {
            console.error('Error fetching employees:', error);
        }

        // Fetch employee types
        try {
            const employeeTypes = await fetchEmployeeTypes();
            const typeDropdown = document.getElementById('employee-type-dropdown');
            employeeTypes.forEach(type => {
                // Add typeID and typeName to an object that can be used later.
                this.view.employeeTypes[type.typeID] = type.typeName;
                // Populate the option element in the html code
                const option = document.createElement('option');
                option.value = type.typeID;
                option.textContent = type.typeName;
                typeDropdown.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching employee types:', error);
        }
        // Loading spinner removed when function is done loading
        document.getElementById('loading').style.display = 'none';
    }

    async addEmployee(data) {
        const newEmployee = await createEmployee(data);
        const employee = new this.model(newEmployee.employeeID, newEmployee.pin, newEmployee.typeID, newEmployee.firstName, newEmployee.lastName, newEmployee.street, newEmployee.city, newEmployee.state, newEmployee.zip, newEmployee.created_at, newEmployee.updated_at);
        this.view.addEmployee(employee);
    }


    async editEmployee(id, data) {
        const updatedEmployee = await updateEmployee(id, data);
        console.log(updatedEmployee);
        this.view.updateEmployee(id, updatedEmployee);
    }

    async removeEmployee(id) {
        await deleteEmployee(id);
        this.view.removeEmployee(id);
    }
}
