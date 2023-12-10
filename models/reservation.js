  // written by: Bjarni Jonsson

class Reservation {
    constructor(reservationID, name, customerID, dateTime, numPeople, tableSelection, created_at, updated_at) {
        this.reservationID = reservationID;
        this.name = name;
        this.customerID = customerID;
        this.dateTime = dateTime;
        this.numPeople = numPeople;
        this.tableSelection = tableSelection;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    update(data) {
        this.reservationID = data.reservationID || this.reservationID;
        this.name = data.name || this.name;
        this.customerID = data.customerID || this.customerID;
        this.dateTime = data.dateTime || this.dateTime;
        this.numPeople = data.numPeople || this.numPeople;
        this.tableSelection = data.tableSelection || this.tableSelection;
        this.created_at = data.created_at || this.created_at;
        this.updated_at = data.updated_at || this.updated_at;
    }

    getReservationDetails() {
        return {
            reservationID: this.reservationID,
            name: this.name,
            customerID: this.customerID,
            dateTime: this.dateTime,
            numPeople: this.numPeople,
            tableSelection: this.tableSelection,
            created_at: this.created_at,
            updated_at: this.updated_at
        };
    }

    updateReservationDetails(newDetails) {
        this.update(newDetails);
    }
}
