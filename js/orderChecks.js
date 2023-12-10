// written by: Sokhna Khady
// debugged by: Bjarni Jonsson

import { OrdersController } from "../controllers/orderChecksController.js";
import { Orders } from "../models/orders.js";

class View {
    createListItem(order, items) {
        const ordersContainer = document.getElementById('orders');
        const orderElement = document.createElement('div');
        orderElement.id = `order-${order.orderID}`;
        orderElement.className = 'order';

        const orderTitle = document.createElement('h2');
        orderTitle.className = 'order-title';
        orderTitle.textContent = `Table #${order.restaurantTable}`;
        orderElement.appendChild(orderTitle);

        const orderStatus = document.createElement('p');
        orderStatus.className = 'order-status';
        orderStatus.textContent = `Order Status: ${order.orderStatus}`;
        orderElement.appendChild(orderStatus);

        const createdAt = document.createElement('p');
        createdAt.className = 'order-created';
        createdAt.textContent = `Created at: ${order.created_at}`;
        orderElement.appendChild(createdAt);

        const showDetailsButton = document.createElement('button');
        showDetailsButton.className = 'show-order-details';
        showDetailsButton.textContent = 'Show Details';
        showDetailsButton.style.cursor = 'pointer';

        showDetailsButton.addEventListener('click', () => this.toggleOrderDetails(items, orderElement));
        
        orderElement.appendChild(showDetailsButton);
        ordersContainer.appendChild(orderElement);
    }

    helperFunction(items, orderElement) {
        items.forEach((item) => {
            this.toggleOrderDetails(item, orderElement);
        })
    }

    toggleOrderDetails(items, listItem) {
        let detailsDiv = listItem.querySelector('.details');
        if (!detailsDiv) {
            // Create details div if it doesn't exist
            detailsDiv = document.createElement('div');
            detailsDiv.className = 'details';
    
            // Create a table element
            const detailsTable = document.createElement('table');
            
            // Helper function to insert rows in the table
            const insertDetailRow = (table, key, value) => {
                let row = table.insertRow();
                let cellKey = row.insertCell(0);
                let cellValue = row.insertCell(1);
                cellKey.textContent = key;
                cellValue.textContent = value;
                cellKey.className = 'list-detail-key';
                cellValue.className = 'list-detail-value';
            };
    
            // Insert rows into the table
            items.forEach((item) => {
                insertDetailRow(detailsTable, item.itemName, 'Qty: ' + item.itemQuantity);
            })
    
            detailsDiv.appendChild(detailsTable);
            detailsDiv.style.display = 'none';
            listItem.appendChild(detailsDiv);
        }
        
        // Toggle the visibility of the details div
        detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
    }

    // This function is called when an order is updated on a click, update button.
    updateListItem(orderID, updatedOrder) {
        const orderElement = document.querySelector(`.order[data-order-id="${orderID}"]`);

        if (orderElement) {
            
            const details = orderElement.querySelector('.details');
            // Clear existing details
            details.innerHTML = '';
            // Update details based on 'updatedOrder' data
            details.innerHTML += `<strong>Details:</strong><br>`;
            updatedOrder.details.forEach((item) => {
                details.innerHTML += `Item: ${item.itemName} (Quantity: ${item.quantity})<br>`;
            });
            details.innerHTML += `Special Request: ${updatedOrder.specialRequest}<br>`;
            details.innerHTML += `Order Time: ${updatedOrder.orderTime}<br>`;
            details.innerHTML += `Order Total: $${updatedOrder.orderTotal.toFixed(2)}`;
        }
    }

    // This function would be called on click, something like a delete button.
    removeListItem(orderID) {
        const orderElement = document.querySelector(`.order[data-order-id="${orderID}"]`);

        if (orderElement) {
            // Remove the order list item from the container
            orderElement.remove();
        }
    }
}

const view = new View();
const controller = new OrdersController(view, Orders);

// This looks good!
document.addEventListener("DOMContentLoaded", function () {
    const showDetailsButtons = document.querySelectorAll(".show-details");

    showDetailsButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const orderElement = button.closest(".order");
            const details = orderElement.querySelector(".details");
            details.classList.toggle("hidden");
        });
    });


});
