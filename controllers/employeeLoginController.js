  // written by: Bjarni Jonsson

import { fetchEmployees, updateEmployee } from '../models/api.js';

export class EmployeeLoginController {
    constructor(view, model, employees) {
        this.view = view;
        this.model = model;
        this.employees = employees;
        this.init();
    }

    async init() {
        try {
            this.employees = await fetchEmployees();

            this.employees.forEach(employee => {
                if(employee.clockedIn === 1) {
                    this.view.clockedInEmployees(employee);
                }
            });
        } catch (error) {
            console.log('Not able to fetch clocked in employees: ', error);
        }

    }

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
