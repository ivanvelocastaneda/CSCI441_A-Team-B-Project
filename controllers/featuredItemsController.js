// js/controllers/featuredMenuItemController.js
import { MenuItemController } from './menuItemController.js';

export class FeaturedMenuItemController extends MenuItemController {
    constructor(view, model) {
        super(view, model);
    }

    // Add functions specific to featured menu items here
    async addFeaturedItem(data) {
        const newItem = await this.createMenuItem(data);
        const menuItem = new this.model(newItem.itemID, newItem.itemName, newItem.description, newItem.price, newItem.itemImage);
        this.view.addFeaturedItems(menuItem);
    }
}
