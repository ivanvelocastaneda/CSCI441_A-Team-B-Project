class OrderItem {
    constructor(orderID, itemID, itemQuantity) {
        this.orderID = orderID;
        this.itemID = itemID;
        this.itemQuantity = itemQuantity;
    }

    update(data) {
        this.orderID = data.orderID || this.orderID;
        this.itemID = data.itemID || this.itemID;
        this.itemQuantity = data.itemQuantity || this.itemQuantity;
    }

    getQuantity() {
        return this.itemQuantity;
    }

    updateQuantity(newQuantity) {
        this.itemQuantity = newQuantity;
    }
}
