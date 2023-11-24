import { fetchEmployees, updateEmployee } from '../models/api.js';

export class EmployeeLoginController {
    // constructor(view, model) {
    //     this.view = view;
    //     this.model = model;
    //     this.init();
    // }

    async findEmployeesWithMatchingPIN(searchPIN) {
        try {
            const employees = await fetchEmployees();
            const matchingEmployee = employees.find(employee => employee.pin === searchPIN);

            if (matchingEmployee) {
                return matchingEmployee;
            } else {
                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching employees:', error);
            return null;
        }
    }

    async editEmployee(id, data) {
        try {
            updateEmployee(id, data);
        } catch (error) {
            console.error(`Error updating clock state for employee ${id}:`, error);
        }
    }

}
