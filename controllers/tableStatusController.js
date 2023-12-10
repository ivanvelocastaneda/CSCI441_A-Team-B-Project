  // written by: Bjarni Jonsson

import { fetchLatestOrders, updateOrder, fetchMenuItems, createOrder, createOrderItem } from "../models/api.js";

export class TableOrderController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    async init() {
        const orders = await fetchLatestOrders();
        orders.forEach(order => {
            this.view.addTable(order);
        });
        this.view.arrangeTables();
    }

    async editOrderStatus(order, status) {
        try {
            console.log(order);
            const data = {
                orderStatus: status,
                menuItems: '',
                restaurantTable: order.restaurantTable
            }
            console.log(data);
            const updatedOrder = await updateOrder(order.orderID, data);
            this.view.updateOrderStatus(order.orderID, updatedOrder);
        } catch (error) {
            console.error(`Error updating order with id ${order.orderID}:`, error);
        }
    }

    async getMenuItemsByCategory(category) {
        try {
            const items = await fetchMenuItems();
            return items.filter(item => item.category === category);
        } catch (error) {
            console.error('Error fetching menu items by category:', error);
        }
    }

    async createNewOrder(orderData) {
        try {
            return await createOrder(orderData);
        } catch (error) {
            console.error('Error creating new order:', error);
        }
    }

    async addItemsToOrder(data) {
        try {
            return await createOrderItem(data);
        } catch (error) {
            console.error('Error adding items to order:', error);
        }
    }

}