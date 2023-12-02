// Import the place order controller here
import { OrdersController } from "../controllers/orderChecksControllers.js";
import { Orders } from "../models/orders.js";


// Inside view you want to create each order dynamically.
// Right now all the orders are hard coded in the html file.
// It should look just like the html code but created with javascript, like you did at the bottom of the file
class View {

    // This function is called every time the page loads automatically
    createListItem(order) {
        // Here you can use the code you created at the bottom, creating each order dynamically.
        // Look at ./js/featuredMenuItems.js for an example.


        // This was only for testing, but you can see that this code displays the order IDs on the webpage.
        //////////////////////////////////////////////////////
        const ordersContainer = document.getElementById('orders');
        const test = document.createElement('h3');
        test.textContent = order.orderID;
        ordersContainer.append(test);
        //////////////////////////////////////////////////////

    }



    // This function is called when order is updated on a click, update button.
    updateListItem(orderID, updatedOrder) {
        // Updating the order list item.
        // The updateMenuItem in  ./js/menuItemsModify.js has a good example.
    }

    // This function would be called on click, something like a delete button.
    removeListItem(orderID) {
        // Delete the order list item
        // The deleteMenuItem in ./js/menuItemsModify.js has a good example.
    }

}

const view = new View();
const controller = new OrdersController(view, Orders)


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

    
    // There is a variable on the order data called created_at that you can implement somewhere in the code to sort.
    // I'm not sure right now where would be the best place to implement it but you might have some ideas.
    // orders.sort((a, b) => b.orderTimestamp - a.orderTimestamp);

    // const ordersContainer = document.querySelector('.orders');

    // You won't need to use the forEach here since I already added it in the orderChecksController.
    // Everything else looks pretty good and can be moved in the above functions.
//     orders.forEach((order) => {
//         const orderElement = document.createElement('div');
//         orderElement.classList.add('order');

//         const orderTitle = document.createElement('h2');
//         orderTitle.textContent = `Table #${order.tableNumber}`;
//         orderElement.appendChild(orderTitle);

//         const totalItems = document.createElement('p');
//         totalItems.textContent = `Total Items: ${order.totalItems}`;
//         orderElement.appendChild(totalItems);

//         const showDetailsButton = document.createElement('button');
//         showDetailsButton.classList.add('show-details');
//         showDetailsButton.textContent = 'Show Details';
//         orderElement.appendChild(showDetailsButton);

//         const details = document.createElement('div');
//         details.classList.add('details', 'hidden');

//         const detailsContent = document.createElement('p');
//         detailsContent.innerHTML = `<strong>Details:</strong><br>`;
//         order.details.forEach((item) => {
//             detailsContent.innerHTML += `Item: ${item.itemName} (Quantity: ${item.quantity})<br>`;
//         });
//         detailsContent.innerHTML += `Special Request: ${order.specialRequest}<br>`;
//         detailsContent.innerHTML += `Order Time: ${order.orderTime}<br>`;
//         detailsContent.innerHTML += `Order Total: $${order.orderTotal.toFixed(2)}`;
//         details.appendChild(detailsContent);

//         orderElement.appendChild(details);

//         ordersContainer.appendChild(orderElement);
//     });
});
