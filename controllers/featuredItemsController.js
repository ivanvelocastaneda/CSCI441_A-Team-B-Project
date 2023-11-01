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
            // Temporary featured items selector
            if (item.itemID === 6 || item.itemID === 7 || item.itemID === 10) {
                const menuItem = new this.model(item.itemID, item.itemName, item.description, item.price, item.itemImage);
                this.view.addFeaturedItem(menuItem);
            }
        });
        // Loading spinner removed when function is done loading
        document.getElementById('loading').style.display = 'none';

    }

    async addFeaturedItem(data) {
        try {
            const newItem = await this.createMenuItem(data);
            const menuItem = new this.model(newItem.itemID, newItem.itemName, newItem.description, newItem.price, newItem.itemImage);
            this.view.addFeaturedItems(menuItem);
        } catch (error) {
            console.error('Failed to add featured item: ', error);
        }
    }
}