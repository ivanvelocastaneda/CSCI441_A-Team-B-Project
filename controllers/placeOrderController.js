  // written by: Bjarni Jonsson

import { fetchMenuItems, createOrder, createOrderItem } from '../models/api.js';

export async function getMenuItemsByCategory(category) {
    try {
        const items = await fetchMenuItems();
        return items.filter(item => item.category === category);
    } catch (error) {
        console.error('Error fetching menu items by category:', error);
    }
}

export async function createNewOrder(orderData) {
    try {
        return await createOrder(orderData);
    } catch (error) {
        console.error('Error creating new order:', error);
    }
}

export async function addItemsToOrder(data) {
    try {
        return await createOrderItem(data);
    } catch (error) {
        console.error('Error adding items to order:', error);
    }
}
