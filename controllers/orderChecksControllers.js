// Imported the fetchOrders function from api.js
import { deleteOrder, fetchOrders, updateOrder } from "../models/api.js";

export class OrdersController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    };

    // Everything in this function will run on startup
    async init() {
        try {
            // Store all orders in a variable
            const data = await fetchOrders();
            console.log(data);
            // Go over each order in data and send the information to the createListItem function
            data.forEach(order => {
                this.view.createListItem(order);
            });        
        } catch (error) {
            console.log("Not able to fetch orders: ", error);
        } finally {
            // document.getElementById('loading').style.display = 'none';
        }
    }

    // Controller function for updating data
    async editOrder(orderID, data) {
        // Here we need some code that sends the new data to the updateOrder function in api.js
        try {
            const updatedOrder = await updateOrder(orderID, data);
            this.view.updateListItem(orderID, updatedOrder);
            console.log(`Order successfully updated!`)
        } catch (error) {
            console.log(`Error updating order with id ${id}: `, error)
        }
    }

    async removeEmployee(orderID) {
        // Here we need some code that sends the orderID to the deleteOrder function in the api.js
        try {
            await deleteOrder(orderID);
            this.view.removeOrderListItem(orderID);
            console.log(`Order successfully deleted!`)
        } catch (error) {
            console.log(`Error deleting order with id ${id}: `, error)
        }
    }

    // You don't need this function since it is already available in the api.js file.
    // Just import the correct fetch function from api.js at the top of the file.

    // function fetchOrderDetails(orderId) {
    //         const apiUrl = `https://csci441-teamb.onrender.com/${orderId}`;


    //         return fetch(apiUrl)
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     throw new Error("Network response was not ok");
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => {
                    
    //                 const orderDetails = `Order #${data.id} Details:
    //                 - Table: ${data.tableNumber}
    //                 - Total Items: ${data.totalItems}
    //                 - Total: $${data.totalAmount.toFixed(2)}`;
    //                 return orderDetails;
    //             });
    // }

}

