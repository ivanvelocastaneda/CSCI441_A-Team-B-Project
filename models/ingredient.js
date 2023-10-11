class Ingredient {
    constructor(ingredientID, ingredientName) {
        this.ingredientID = ingredientID;
        this.ingredientName = ingredientName;
    }

    update(data) {
        this.ingredientID = data.ingredientID || this.ingredientID;
        this.ingredientName = data.ingredientName || this.ingredientName;
    }

    getName() {
        return this.ingredientName;
    }
}
