import { fetchMenuItems } from '../models/api.js';

export class MenuItemController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    async init() {
        const data = await fetchMenuItems();
        data.forEach(item => {
            const menuItem = new this.model(item.itemID, item.itemName, item.description, item.price);
            this.view.addMenuItem(menuItem);
        });
    }
}

