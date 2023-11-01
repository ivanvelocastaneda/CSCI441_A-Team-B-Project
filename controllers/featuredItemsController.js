import { fetchMenuItems, createMenuItem } from '../models/api.js';

export class FeaturedMenuItemController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    async init() {
        const data = await fetchMenuItems();
        data.forEach(item => {
            const menuItem = new this.model(item.itemID, item.itemName, item.description, item.price, item.itemImage);
            this.view.addFeaturedItem(menuItem);
        });

    }

    async addFeaturedItem(data) {
        // Spinner not working
        this.view.showSpinner();
        try {
            setTimeout(resolve, 3000);
            const newItem = await this.createMenuItem(data);
            const menuItem = new this.model(newItem.itemID, newItem.itemName, newItem.description, newItem.price, newItem.itemImage);
            this.view.addFeaturedItems(menuItem);
        } catch (error) {
            console.error('Failed to add featured item: ', error);
        } finally {
            this.view.hideSpinner();
        }
    }
}