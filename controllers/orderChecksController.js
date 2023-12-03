
import { deleteOrder, fetchOrders, updateOrder } from "../models/api.js";
import { View } from '/orderChecksController.js';

export class OrdersController {
    constructor(view) {
        this.view = view;
        this.init();
    }

    async init() {
        try {
            const data = await fetchOrders();
            data.forEach((order) => {
                this.view.createListItem(order);
            });
        } catch (error) {
            console.log("Not able to fetch orders: ", error);
        } finally {
        
        }
    }

    async editOrder(orderID, data) {
        try {
            const updatedOrder = await updateOrder(orderID, data);
            this.view.updateListItem(orderID, updatedOrder);
            console.log(`Order successfully updated!`);
        } catch (error) {
            console.log(`Error updating order with id ${orderID}: `, error);
        }
    }

    async removeOrder(orderID) {
        try {
            await deleteOrder(orderID);
            this.view.removeListItem(orderID);
            console.log(`Order successfully deleted!`);
        } catch (error) {
            console.log(`Error deleting order with id ${orderID}: `, error);
        }
    }
}

// Inside orderChecksController

// Fetch orders and sort them
fetchOrders().then((orders) => {
    // Assuming 'created_at' is a timestamp
    orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Pass sorted orders to the view
    const view = new View();
    orders.forEach(order => view.createListItem(order));
});

