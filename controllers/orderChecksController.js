
import { deleteOrder, fetchLatestOrders, updateOrder, fetchAllOrderItems, fetchMenuItem, fetchFullOrder } from "../models/api.js";

export class OrdersController {
    constructor(view) {
        this.view = view;
        this.init();
    }

    async init() {
        try {
            const data = await fetchLatestOrders();
            data.forEach(async (order) => {
                const items = await fetchFullOrder(order.orderID);
                this.view.createListItem(order, items);
            });
        } catch (error) {
            console.log("Not able to fetch orders: ", error);
        } finally {
            // Loading spinner removed when function is done loading
            document.getElementById('loading').style.display = 'none';
        }
    }

    async getOrderItems(orderID) {
        try {
            return await fetchAllOrderItems();
        } catch (error) {
            console.error('Error fetching menu items for orderID: ', orderID);
        } 
    }

    async getMenuItem(itemID) {
        try {
            return await fetchMenuItem(itemID);
        } catch (err) {
            console.error('Failed to fetch menu item: ', itemID)
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

