  // written by: Bjarni Jonsson

export class FullOrder {
    constructor(itemName, description, calories, category, itemQuantity, price, orderStatus, restaurantTable, created_at, updated_at) {
        this.itemName = itemName;
        this.description = description;
        this.calories = calories;
        this.category = category;
        this.itemQuantity = itemQuantity;
        this.price = price;
        this.orderStatus = orderStatus
        this.restaurantTable = restaurantTable;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    update(data) {
        this.itemName = data.itemName || this.itemName;
        this.description = data.description || this.description;
        this.calories = data.calories || this.calories;
        this.category = data.category || this.category;
        this.itemQuantity = data.itemQuantity || this.itemQuantity;
        this.price = data.price || this.price;
        this.orderStatus = data.orderStatus || this.orderStatus;
        this.restaurantTable = data.restaurantTable || this.restaurantTable;
        this.created_at = data.created_at || this.created_at;
        this.updated_at = data.updated_at || this.updated_at;
    }
}