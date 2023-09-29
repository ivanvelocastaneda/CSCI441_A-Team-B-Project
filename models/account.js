class Account {
    constructor(type, firstName, lastName, street, city, state, zip) {
        this.type = type;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    update(data) {
        this.type = data.type || "";
        this.firstName = data.firstName || "";
        this.lastName = data.lastName || "";
        this.street = data.street || "";
        this.city = data.city || "";
        this.state = data.state || "";
        this.zip = data.zip || "";
    }
}