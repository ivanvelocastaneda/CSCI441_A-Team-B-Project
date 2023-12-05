import { TableOrderController } from "../controllers/tableStatusController";
import { Orders } from '../models/orders';

class View {
    
    addTable(table) {
        const ul = document.getElementsByClassName('list-group list-group-flush');
        const li = document.createElement('li');
        li.className = 'List-group-item';
        li.id = `Table ${table.id}`;

        const button = document.createElement('button');
        button.className = 'btn btn-primary dropdown-toggle';
        button.type = 'button';

        const div = document.createElement('div');
        div.className = 'placeHolder';

        li.appendChild(button);
        li.appendChild(div);
        ul.appendChild(li);

    }
};

const view = new View();
const controller = new EmployeeModifyController(view, Orders);
// let selectedItem = new Employee();

