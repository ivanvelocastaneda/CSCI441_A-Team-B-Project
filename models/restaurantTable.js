  // written by: Bjarni Jonsson

class RestaurantTable {
    constructor(tableID, tableStatus, orderID) {
        this.tableID = tableID;
        this.tableStatus = tableStatus;
        this.orderID = orderID;
    }

    update(data) {
        this.tableID = data.tableID || this.tableID;
        this.tableStatus = data.tableStatus || this.tableStatus;
        this.orderID = data.orderID || this.orderID;
    }

    getTableStatus() {
        return this.tableStatus;
    }

    updateTableStatus(newStatus) {
        this.tableStatus = newStatus;
    }
}
