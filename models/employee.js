  // written by: Bjarni Jonsson

export class Employee {
    constructor(employeeID, pin, typeID, firstName, lastName, street, city, state, zip, clockedIn, hourlyRate, created_at, updated_at) {
        this.employeeID = employeeID;
        this.pin = pin;
        this.typeID = typeID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.clockedIn = clockedIn;
        this.hourlyRate = hourlyRate;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    update(data) {
        this.employeeID = data.employeeID || this.employeeID;
        this.pin = data.pin || this.pin;
        this.typeID = data.typeID || this.typeID;
        this.firstName = data.firstName || this.firstName;
        this.lastName = data.lastName || this.lastName;
        this.street = data.street || this.street;
        this.city = data.city || this.city;
        this.state = data.state || this.state;
        this.zip = data.zip || this.zip;
        this.clockedIn = data.clockedIn || this.clockedIn;
        this.hourlyRate = data.hourlyRate || this.hourlyRate;
        this.created_at = data.created_at || this.created_at;
        this.updated_at = data.updated_at || this.updated_at;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAddress() {
        return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    }
}
