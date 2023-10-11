class Orders {
    constructor(orderID, customerID, orderStatus, created_at, updated_at) {
        this.orderID = orderID;
        this.customerID = customerID;
        this.orderStatus = orderStatus;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    update(data) {
        this.orderID = data.orderID || this.orderID;
        this.customerID = data.customerID || this.customerID;
        this.orderStatus = data.orderStatus || this.orderStatus;
        this.created_at = data.created_at || this.created_at;
        this.updated_at = data.updated_at || this.updated_at;
    }

    getOrderStatus() {
        return this.orderStatus;
    }

    updateOrderStatus(newStatus) {
        this.orderStatus = newStatus;
    }
}
