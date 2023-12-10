// written by: Ivan Velo, Bjarni Jonsson

import { MenuItemController } from "../controllers/menuItemController.js";
import { MenuItem } from "../models/menuItem.js";

class View {
  addMenuItem(menuItem) {
    const category = document.getElementById(`display-${menuItem.category}`);
    let row = category.querySelector(".row");

    // Check if a row for the category exists, otherwise create a new row
    if (!row) {
      row = document.createElement("div");
      row.className = "row";
      category.appendChild(row);
    }

    const column = document.createElement("div");
    column.className = "col-sm-4";

    const card = document.createElement("card");
    card.id = `menu-item-${menuItem.itemID}`;
    card.className = "card";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.alt = menuItem.itemName;
    img.src = menuItem.itemImage;
    img.style.width = "100%";
    img.style.height = "auto";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = menuItem.itemName;

    const p = document.createElement("p");
    p.className = "card-calories";
    p.textContent = menuItem.calories + " Cal";

    const q = document.createElement("q");
    q.className = "card-description";
    q.textContent = menuItem.description;

    const span = document.createElement("span");
    span.className = "price";
    span.textContent = `$${menuItem.price}`;

    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(span);
    cardBody.appendChild(document.createElement("br"));
    cardBody.appendChild(document.createElement("br"));
    cardBody.appendChild(q);
    card.appendChild(img);
    card.appendChild(cardBody);
    column.appendChild(card);
    category.appendChild(column);

    // Append the column to the row
    row.appendChild(column);
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
