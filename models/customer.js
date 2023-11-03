class Customer {
    constructor(customerID, username, password, firstName, lastName, street, city, state, zip, rewardPoints, created_at, updated_at, email) {
        this.customerID = customerID;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.rewardPoints = rewardPoints;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.email = email;
    }

    update(data) {
        this.customerID = data.customerID || this.customerID;
        this.username = data.username || this.username;
        this.password = data.password || this.password;
        this.firstName = data.firstName || this.firstName;
        this.lastName = data.lastName || this.lastName;
        this.street = data.street || this.street;
        this.city = data.city || this.city;
        this.state = data.state || this.state;
        this.zip = data.zip || this.zip;
        this.rewardPoints = data.rewardPoints || this.rewardPoints;
        this.created_at = data.created_at || this.created_at;
        this.updated_at = data.updated_at || this.updated_at;
        this.email = data.email || this.email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAddress() {
        return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    }

    updateRewardPoints(points) {
        this.rewardPoints += points;
    }
}
