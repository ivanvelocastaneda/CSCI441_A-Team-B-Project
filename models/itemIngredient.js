class ItemIngredient {
    constructor(itemID, ingredientID) {
        this.itemID = itemID;
        this.ingredientID = ingredientID;
    }

    update(data) {
        this.itemID = data.itemID || this.itemID;
        this.ingredientID = data.ingredientID || this.ingredientID;
    }

    getItemID() {
        return this.itemID;
    }

    getIngredientID() {
        return this.ingredientID;
    }

    updateItemID(newItemID) {
        this.itemID = newItemID;
    }

    updateIngredientID(newIngredientID) {
        this.ingredientID = newIngredientID;
    }
}
