  // written by: Bjarni Jonsson

import { fetchMenuItems, createMenuItem, updateMenuItem, deleteMenuItem } from '../models/api.js';

export class MenuItemController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    async init() {
        try {
            const data = await fetchMenuItems();
            data.forEach(item => {
                this.view.addMenuItem(item);
            });
        } catch (error) {
            console.error("Error fetching menu items:", error);
        } finally {
            document.getElementById('loading').style.display = 'none';
        }
    }

    async addMenuItem(data) {
        try {
            const newItem = await createMenuItem(data);
            const menuItem = new this.model(newItem.itemID, newItem.itemName, newItem.description, newItem.price, newItem.itemImage, newItem.category, newItem.isDeleted, newItem.calories);
            this.view.addMenuItem(menuItem);
        } catch (error) {
            console.error("Error adding a menu item:", error);
        }
    }


    async editMenuItem(id, data) {
        try {
            const updatedItem = await updateMenuItem(id, data);
            this.view.updateMenuItem(id, updatedItem);
        } catch (error) {
            console.error(`Error updating menu item with id ${id}:`, error);
        }
    }

    async removeMenuItem(id) {
        try {
            await deleteMenuItem(id);
            this.view.removeMenuItem(id);
        } catch (error) {
            console.error(`Error removing menu item with id ${id}:`, error);
        }
    }
}
