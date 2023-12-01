import { MenuItemController } from "../controllers/menuItemController.js";
import { MenuItem } from "../models/menuItem.js";

class View {
  addItem(menuItem) {
    const cards = document.getElementById("col-sm-4");
    const foodcard = document.createElement("card");
    foodcard.id = `featured-item-${menuItem.itemID}`;
    foodcard.className = "card";

    const img = document.createElement("card-img-top");
    img.alt = menuItem.itemName;
    img.src = menuItem.itemImage;

    const h3 = document.createElement("h3");
    h3.className = "category";
    h3.textContent = menuItem.category;

    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = menuItem.itemName;

    const p = document.createElement("p");
    p.className = "card-calories";
    p.textContent = menuItem.calories;

    const q = document.createElement("q");
    q.className = "card-description";
    q.textContent = menuItem.description;

    const span = document.createElement("span");
    span.className = "price";
    span.textContent = `$${menuItem.price}`;

    foodcard.appendChild(h3);
    foodcard.appendChild(img);
    foodcard.appendChild(h5);
    foodcard.appendChild(p);
    foodcard.appendChild(q);
    foodcard.appendChild(span);
    cards.appendChild(foodcard);
  }

  showSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
  }

  hideSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "none";
  }
}

const view = new View();
const controller = new MenuItemController(view, MenuItem);