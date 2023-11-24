import { FeaturedMenuItemController } from '../controllers/featuredItemsController.js';
import { MenuItem } from '../models/menuItem.js';

class View {

    addFeaturedItem(menuItem) {
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
    }

    showSpinner() {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
    }

    hideSpinner() {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'none';
    }

}

const view = new View();
const controller = new FeaturedMenuItemController(view, MenuItem);


