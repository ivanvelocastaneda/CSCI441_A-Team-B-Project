import { MenuItemController } from '../controllers/menuItemController.js';
import { MenuItem } from '../models/menuItem.js';

class View {
    // New function to implement
    addMenuItem(menuItem) {
        const section = document.getElementById('featured-menu');
        const div = document.createElement('div');
        div.id = `featured-item-${menuItem.itemID}`;
        div.className = 'menu-item';

        const img = document.createElement('img');
        img.alt = menuItem.itemName;
        img.src = menuItem.itemImage;

        const h3 = document.createElement('h3');
        h3.textContent = menuItem.itemName;

        const p = document.createElement('p');
        p.textContent = menuItem.description;

        const span = document.createElement('span');
        span.className = 'price';
        span.textContent = `$${menuItem.price}`;

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(span);
        section.appendChild(div);
    }

}

const view = new View();
const controller = new MenuItemController(view, MenuItem);


