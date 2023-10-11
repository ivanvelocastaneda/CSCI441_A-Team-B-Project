class TransactionItem {
    constructor(transactionID, itemID) {
        this.transactionID = transactionID;
        this.itemID = itemID;
    }

    update(data) {
        this.transactionID = data.transactionID || this.transactionID;
        this.itemID = data.itemID || this.itemID;
    }

    getTransactionID() {
        return this.transactionID;
    }

    getItemID() {
        return this.itemID;
    }

    updateTransactionID(newTransactionID) {
        this.transactionID = newTransactionID;
    }

    updateItemID(newItemID) {
        this.itemID = newItemID;
    }
}
