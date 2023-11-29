class Orders {
    constructor(orderID, orderStatus, created_at, updated_at, restaurantTable) {
        this.orderID = orderID;
        this.orderStatus = orderStatus;
        this.menuItems - menuItems;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.restaurantTable = restaurantTable;
    }

    update(data) {
        this.orderID = data.orderID || this.orderID;
        this.orderStatus = data.orderStatus || this.orderStatus;
        this.menuItems = data.menuItems || this.menuItems;
        this.created_at = data.created_at || this.created_at;
        this.updated_at = data.updated_at || this.updated_at;
        this.restaurantTable = data.restaurantTable || this.restaurantTable;
    }

    getOrderStatus() {
        return this.orderStatus;
    }

    getMenuItems() {
        return this.menuItems
    }
}
