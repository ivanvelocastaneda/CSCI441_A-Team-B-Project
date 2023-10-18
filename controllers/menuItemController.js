import { fetchMenuItems, createMenuItem, updateMenuItem, deleteMenuItem } from '../models/api.js';

export class MenuItemController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    async init() {
        const data = await fetchMenuItems();
        data.forEach(item => {
            const menuItem = new this.model(item.itemID, item.itemName, item.description, item.price, item.imageUrl);
            this.view.addMenuItem(menuItem);
        });

        // data.forEach(item => {
        //     const menuItem = new this.model(item.itemID, item.itemName, item.description, item.price, item.imageUrl);
        //     this.view.addFeaturedItem(menuItem);
        // });
    }

    async addMenuItem(data) {
        const newItem = await createMenuItem(data);
        const menuItem = new this.model(newItem.itemID, newItem.itemName, newItem.description, newItem.price, newItem.imageUrl);
        this.view.addMenuItem(menuItem);
    }

    // async addFeaturedItem(data) {
    //     const newItem = await createMenuItem(data);
    //     const menuItem = new this.model(newItem.itemID, newItem.itemName, newItem.description, newItem.price, newItem.imageUrl);
    //     this.view.addFeaturedItems(menuItem);
    // }

    async editMenuItem(id, data) {
        const updatedItem = await updateMenuItem(id, data);
        this.view.updateMenuItem(id, updatedItem);
    }

    async removeMenuItem(id) {
        await deleteMenuItem(id);
        this.view.removeMenuItem(id);
    }
}
