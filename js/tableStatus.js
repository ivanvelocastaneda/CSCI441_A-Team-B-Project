import { TableOrderController } from "../controllers/tableStatusController.js";
import { Orders } from '../models/orders.js';

class View {
    
    addTable(order) {
        console.log(order);
        const ul = document.getElementById('table-list');
        const li = document.createElement('li');
        li.className = 'List-group-item';
        li.id = `Table ${order.orderID}`;
        li.textContent = `Table ${order.restaurantTable}`;

        const button = document.createElement('button');
        // button.className = 'btn btn-primary dropdown-toggle';
        // button.type = 'button';

        const div = document.createElement('div');
        div.className = 'placeHolder';

        li.appendChild(button);
        li.appendChild(div);
        ul.appendChild(li);
        this.createButton(order.orderStatus, button);

    }

    createButton(name, buttonToCreate){
        let color = '';
        switch(name){
          case 'Waiting for Order':
            color = 'primary';
            break;
          case 'preparing':
            color = 'warning';
            break;
          case 'Ready To Serve':
            color = 'success';
            break;
          case 'Served Meal':
            color = 'info';
            break;
        }
        buttonToCreate.outerHTML = `<button type="button" class="btn btn-${color} dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">${name}</button>`
      }
};

const view = new View();
const controller = new TableOrderController(view, Orders);
// let selectedItem = new Employee();

