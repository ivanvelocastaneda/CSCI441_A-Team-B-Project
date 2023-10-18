export class MenuItem {
    constructor(itemID, itemName, description, price, imageUrl) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    update(data) {
        this.itemID = data.itemID || this.itemID;
        this.itemName = data.itemName || this.itemName;
        this.description = data.description || this.description;
        this.price = data.price || this.price;
        this.imageUrl = data.imageUrl || this.imageUrl;
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
        return this.imageUrl;
    }
}
