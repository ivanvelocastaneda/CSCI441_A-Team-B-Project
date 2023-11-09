import { fetchEmployees } from '../models/api.js';

export class EmployeeLoginController {
    async findEmployeesWithMatchingPIN(searchPIN) {
        try {
            const employees = await fetchEmployees();
            const matchingEmployee = employees.find(employee => employee.pin === searchPIN);

            if (matchingEmployee) {
                return {
                    id: matchingEmployee.employeeID,
                    name: matchingEmployee.firstName + ' ' + matchingEmployee.lastName,
                    pin: matchingEmployee.pin
                };
            } else {
                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching employees:', error);
            return null;
        }
    }
}
