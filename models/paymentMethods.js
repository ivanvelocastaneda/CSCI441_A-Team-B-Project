  // written by: Bjarni Jonsson

class PaymentMethods {
    constructor(paymentMethodID, methodName) {
        this.paymentMethodID = paymentMethodID;
        this.methodName = methodName;
    }

    update(data) {
        this.paymentMethodID = data.paymentMethodID || this.paymentMethodID;
        this.methodName = data.methodName || this.methodName;
    }

    getMethodName() {
        return this.methodName;
    }

    updateMethodName(newMethodName) {
        this.methodName = newMethodName;
    }
}
