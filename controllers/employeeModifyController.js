import { fetchEmployees, createEmployee, updateEmployee, deleteEmployee } from '../models/api.js';

export class EmployeeModifyController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    async init() {
        const data = await fetchEmployees();
        data.forEach(employee => {
            const employeeData = new this.model(employee.employeeID, employee.pin, employee.typeID, employee.firstName, employee.lastName, employee.street, employee.city, employee.state, employee.zip, employee.created_at, employee.updated_at);
            this.view.addEmployee(employeeData);
        });

    }

    async addEmployee(data) {
        const newEmployee = await createEmployee(data);
        const employee = new this.model(newEmployee.employeeID, newEmployee.pin, newEmployee.typeID, newEmployee.firstName, newEmployee.lastName, newEmployee.street, newEmployee.city, newEmployee.state, newEmployee.zip, newEmployee.created_at, newEmployee.updated_at);
        this.view.addEmployee(employee);
    }


    async editEmployee(id, data) {
        const updatedEmployee = await updateEmployee(id, data);
        this.view.updateEmployee(id, updatedEmployee);
    }

    async removeEmployee(id) {
        await deleteEmployee(id);
        this.view.removeEmployee(id);
    }
}
