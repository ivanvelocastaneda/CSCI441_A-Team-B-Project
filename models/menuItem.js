class MenuItem {
    constructor(itemID, itemName, description, price) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.description = description;
        this.price = price;
    }

    update(data) {
        this.itemID = data.itemID || this.itemID;
        this.itemName = data.itemName || this.itemName;
        this.description = data.description || this.description;
        this.price = data.price || this.price;
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.description;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }
}
