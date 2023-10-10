import { MenuItemController } from '../controllers/menuItemController.js';
import { MenuItem } from '../models/menuItem.js';

class View {
    addMenuItem(menuItem) {
        const ul = document.getElementById('menu-items-list');
        const li = document.createElement('li');
        li.textContent = `${menuItem.itemName} - ${menuItem.description} - $${menuItem.price}`;
        ul.appendChild(li);
    }
}

const view = new View();
const controller = new MenuItemController(view, MenuItem);


