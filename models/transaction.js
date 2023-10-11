class Transaction {
    constructor(transactionID, customerID, employeeID, orderID, methodOfPayment, timeStamp, subtotal, tax, tip, transTotal) {
        this.transactionID = transactionID;
        this.customerID = customerID;
        this.employeeID = employeeID;
        this.orderID = orderID;
        this.methodOfPayment = methodOfPayment;
        this.timeStamp = timeStamp;
        this.subtotal = subtotal;
        this.tax = tax;
        this.tip = tip;
        this.transTotal = transTotal;
    }

    update(data) {
        this.transactionID = data.transactionID || this.transactionID;
        this.customerID = data.customerID || this.customerID;
        this.employeeID = data.employeeID || this.employeeID;
        this.orderID = data.orderID || this.orderID;
        this.methodOfPayment = data.methodOfPayment || this.methodOfPayment;
        this.timeStamp = data.timeStamp || this.timeStamp;
        this.subtotal = data.subtotal || this.subtotal;
        this.tax = data.tax || this.tax;
        this.tip = data.tip || this.tip;
        this.transTotal = data.transTotal || this.transTotal;
    }

    getTotal() {
        return this.transTotal;
    }

    updateTotal(newTotal) {
        this.transTotal = newTotal;
    }
}
