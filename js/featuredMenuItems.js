import { MenuItemController } from '../controllers/menuItemController.js';
import { MenuItem } from '../models/menuItem.js';

class View {

    addMenuItem(menuItem) {
        const cards = document.getElementById('cards');
        const foodcard = document.createElement('div');
        foodcard.id = `featured-item-${menuItem.itemID}`;
        foodcard.className = 'foodcard';

        const img = document.createElement('img');
        img.alt = menuItem.itemName;
        img.src = menuItem.itemImage;

        const h3 = document.createElement('h3');
        h3.className = 'name';
        h3.textContent = menuItem.itemName;

        const p = document.createElement('p');
        p.className = 'description';
        p.textContent = menuItem.description;

        const span = document.createElement('span');
        span.className = 'price';
        span.textContent = `$${menuItem.price}`;

        foodcard.appendChild(img);
        foodcard.appendChild(h3);
        foodcard.appendChild(p);
        foodcard.appendChild(span);
        cards.appendChild(foodcard);
        console.log(menuItem);
    }

}

const view = new View();
const controller = new MenuItemController(view, MenuItem);


