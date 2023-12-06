import { TableOrderController } from "../controllers/tableStatusController.js";

import { Orders } from '../models/orders.js';

class View {
    
    addTable(order) {
        const li = document.getElementById(`Table ${order.restaurantTable}`);

        const button = document.createElement('button');

        const div = document.createElement('div');
        div.className = 'placeHolder';

        li.appendChild(button);
        li.appendChild(div);
        this.createButton(order.orderStatus, button);
        this.dropdowns(div, order);
    }

    updateOrderStatus(orderID, updatedOrder) {
      // const li = document.getElementById(`Table ${updatedOrder.restaurantTable}`);
      // console.log(li);
      // const button = li.querySelector('button');
      // this.createButton(updatedOrder.orderStatus, button);
      location.reload();
    }

    arrangeTables() {
      const tableList = document.getElementById('table-list').children;
      const columns = {
          'Waiting for Order': document.querySelector('.WaitingForOrders'),
          'Preparing': document.querySelector('.PrepareMeals'),
          'Ready to Serve': document.querySelector('.readyToServeMeals'),
          'Served Meal': document.querySelector('.ServedMeals')
      };

      Array.from(tableList).forEach(table => {
          const button = table.querySelector('button');
          const statusText = button ? button.textContent : 'Waiting for Order';
          if (columns[statusText]) {
              columns[statusText].appendChild(table);
          }
      });
  }
  

    createButton(state, buttonToCreate){
        let color = '';
        let name = '';
        switch(state){
          case 'preparing':
            name = 'Preparing';
            color = 'warning';
            break;
          case 'readyToServe':
            name = 'Ready to Serve';
            color = 'success';
            break;
          case 'servedMeal':
            name = 'Served Meal';
            color = 'info';
            break;
          default:
            name = 'Waiting for Order'
            color = 'primary';
        }
        // buttonToCreate.outerHTML = `<button type="button" class="btn btn-${color} dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">${name}</button>`
        buttonToCreate.type = 'button';
        buttonToCreate.className = `btn btn-${color} dropdown-toggle`;
        buttonToCreate.setAttribute('data-bs-toggle','dropdown');
        buttonToCreate.setAttribute('aria-expanded','false');
        buttonToCreate.textContent = name;

      }

      dropdowns(dropdown, order){
        const ul = document.createElement('ul');
        ul.className = 'dropdown-menu';

        const li1 = document.createElement('li');
        const a1 = document.createElement('a')
        a1.className = 'dropdown-item WaitingForOrder';
        a1.href = '#';
        a1.textContent = 'Waiting for Order';
        a1.addEventListener('click', () => changetoWaitingforOrder(order));
        li1.appendChild(a1);

        const li2 = document.createElement('li');
        const a2 = document.createElement('a')
        a2.className = 'dropdown-item PrepareMeal';
        a2.href = '#';
        a2.textContent = 'Preparing Meal';
        a2.addEventListener('click', () => changetoPrepareMeal(order));
        li2.appendChild(a2);

        const li3 = document.createElement('li');
        const a3 = document.createElement('a')
        a3.className = 'dropdown-item readyToServe';
        a3.href = '#';
        a3.textContent = 'Ready to Serve';
        a3.addEventListener('click', () => changetoReadyToServe(order));
        li3.appendChild(a3);

        const li4 = document.createElement('li');
        const a4 = document.createElement('a')
        a4.className = 'dropdown-item ServedMeal';
        a4.href = '#';
        a4.textContent = 'Served Meal';
        a4.addEventListener('click', () => changetoServedMeal(order));
        li4.appendChild(a4);

        const li5 = document.createElement('li');
        const a5 = document.createElement('a')
        a5.className = 'dropdown-item PlaceOrder';
        a5.href = '#';
        a5.textContent = 'Place Order';
        a5.addEventListener('click', () => changetoPlaceOrder(order));
        li5.appendChild(a5);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        dropdown.appendChild(ul);
  
      }
};

const view = new View();
const controller = new TableOrderController(view, Orders);


function changetoWaitingforOrder(order) {
  controller.editOrderStatus(order, 'waitingForOrder');
}

function changetoPrepareMeal(order) {
  controller.editOrderStatus(order, 'preparing');
}

function changetoReadyToServe(order) {
  controller.editOrderStatus(order, 'readyToServe');
}

function changetoServedMeal(order) {
  controller.editOrderStatus(order, 'servedMeal');
}

function changetoPlaceOrder(order){
  selectedTable = order.restaurantTable;
  document.getElementById('modalPlaceOrderButton').click();
}

let selectedTable = '';
let selectedItems = [];
let orderItems = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('categories').addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON') {
            updateMenu(event.target.id);
        }
    });

    document.getElementById('placeOrderButton').addEventListener('click', placeOrder);
    document.getElementById('closeOrderButton').addEventListener('click', closeOrder);
});

function closeOrder() {
  selectedItems = [];
  orderItems = [];
}

async function updateMenu(category) {
    const menuItems = document.getElementById('menuItems');
    menuItems.textContent = 'Loading...';

    try {
        const items = await controller.getMenuItemsByCategory(category);
        menuItems.textContent = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.itemName;
            div.addEventListener('click', () => addItem(item));
            menuItems.appendChild(div);
        });
    } catch (error) {
        menuItems.textContent = 'Failed to load items';
        console.error('Error updating menu:', error);
    }
}

function addItem(item) {
    selectedItems.push(item.itemName);
    orderItems.push(item.itemID);
    updateOrderView();
}

function updateOrderView() {
    const orderList = document.getElementById('selectedItems');
    orderList.textContent = '';
    selectedItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => removeItem(index));

        li.appendChild(deleteButton);
        orderList.appendChild(li);
    });
}

function removeItem(index) {
    selectedItems.splice(index, 1);
    orderItems.splice(index, 1);
    updateOrderView();
}

async function orderItemCleanup(orderID, orderItems) {
    const itemCounts = orderItems.reduce((acc, itemID) => {
        acc[itemID] = (acc[itemID] || 0) + 1;
        return acc;
    }, {});

    const jsonOutput = Object.entries(itemCounts).map(([itemID, itemQuantity]) => ({
        orderID,
        itemID: parseInt(itemID),
        itemQuantity
    }));

    return jsonOutput;
}

async function placeOrder() {
    const data = {
        orderStatus: "preparing",
        menuItems: orderItems,
        restaurantTable: selectedTable
    }
    try {
        const orderResponse = await controller.createNewOrder(data);
        const itemData = await orderItemCleanup(orderResponse.insertId, orderItems);

            await controller.addItemsToOrder(itemData);
            console.log('Order placed successfully');

            selectedItems = [];
            orderItems = [];
            updateOrderView();
            location.href = './orderChecks.html';
    } catch (error) {
        console.error('Error placing order:', error);
    }
}
