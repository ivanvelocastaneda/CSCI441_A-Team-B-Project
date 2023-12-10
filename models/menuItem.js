  // written by: Bjarni Jonsson

export class MenuItem {
    constructor(itemID, itemName, description, price, itemImage, category, isDeleted, calories) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.description = description;
        this.price = price;
        this.itemImage = itemImage;
        this.category = category;
        this.isDeleted = isDeleted;
        this.calories = calories;
    }

    update(data) {
        this.itemID = data.itemID || this.itemID;
        this.itemName = data.itemName || this.itemName;
        this.description = data.description || this.description;
        this.price = data.price || this.price;
        this.itemImage = data.itemImage || this.itemImage;
        this.category = data.category || this.category;
        this.isDeleted = data.isDeleted || this.isDeleted;
        this.calories = data.calories || this.calories;
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

    getImageUrl() {
        return this.itemImage;
    }
}
