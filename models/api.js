const BASE_URL = "https://csci441-teamb.onrender.com";


//////////////////////////////
// Menu Items calls
//////////////////////////////
export async function fetchMenuItem(id) {
    const response = await fetch(`${BASE_URL}/menu_item/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching menu item: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchMenuItems() {
    const response = await fetch(`${BASE_URL}/menu_item`);
    if (!response.ok) {
        throw new Error(`Error fetching menu items: ${response.statusText}`);
    }
    return await response.json();
}

export async function createMenuItem(data) {
    const response = await fetch(`${BASE_URL}/menu_item/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(JSON.stringify(data));
    if (!response.ok) {
        throw new Error(`Error creating menu item: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateMenuItem(id, data) {
    const response = await fetch(`${BASE_URL}/menu_item/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating menu item: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteMenuItem(id) {
    const response = await fetch(`${BASE_URL}/menu_item/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting menu item: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Ingredient calls
//////////////////////////////
export async function fetchIngredient(id) {
    const response = await fetch(`${BASE_URL}/ingredient/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching ingredient: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchIngredients() {
    const response = await fetch(`${BASE_URL}/ingredient`);
    if (!response.ok) {
        throw new Error(`Error fetching ingredients: ${response.statusText}`);
    }
    return await response.json();
}

export async function createIngredient(data) {
    const response = await fetch(`${BASE_URL}/ingredient/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating ingredient: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateIngredient(id, data) {
    const response = await fetch(`${BASE_URL}/ingredient/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating ingredient: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteIngredient(id) {
    const response = await fetch(`${BASE_URL}/ingredient/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting ingredient: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Item Ingredient calls
//////////////////////////////
export async function fetchItemIngredient(id) {
    const response = await fetch(`${BASE_URL}/item_ingredient/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching item ingredient: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchItemIngredients() {
    const response = await fetch(`${BASE_URL}/item_ingredient`);
    if (!response.ok) {
        throw new Error(`Error fetching item ingredients: ${response.statusText}`);
    }
    return await response.json();
}

export async function createItemIngredient(data) {
    const response = await fetch(`${BASE_URL}/item_ingredient/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating item ingredient: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateItemIngredient(id, data) {
    const response = await fetch(`${BASE_URL}/item_ingredient/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating item ingredient: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteItemIngredient(id) {
    const response = await fetch(`${BASE_URL}/item_ingredient/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting item ingredient: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Customer calls
//////////////////////////////
export async function fetchCustomer(id) {
    const response = await fetch(`${BASE_URL}/customer/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching customer: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchCustomers() {
    const response = await fetch(`${BASE_URL}/customer`);
    if (!response.ok) {
        throw new Error(`Error fetching customers: ${response.statusText}`);
    }
    return await response.json();
}

export async function createCustomer(data) {
    const response = await fetch(`${BASE_URL}/customer/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating customer: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateCustomer(id, data) {
    const response = await fetch(`${BASE_URL}/customer/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating customer: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteCustomer(id) {
    const response = await fetch(`${BASE_URL}/customer/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting customer: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Employee Type calls
//////////////////////////////
export async function fetchEmployeeType(id) {
    const response = await fetch(`${BASE_URL}/employee_type/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching employee type: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchEmployeeTypes() {
    const response = await fetch(`${BASE_URL}/employee_type`);
    if (!response.ok) {
        throw new Error(`Error fetching employee types: ${response.statusText}`);
    }
    return await response.json();
}

export async function createEmployeeType(data) {
    const response = await fetch(`${BASE_URL}/employee_type/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating employee type: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateEmployeeType(id, data) {
    const response = await fetch(`${BASE_URL}/employee_type/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating employee type: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteEmployeeType(id) {
    const response = await fetch(`${BASE_URL}/employee_type/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting employee type: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Employee calls
//////////////////////////////
export async function fetchEmployee(id) {
    const response = await fetch(`${BASE_URL}/employee/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching employee: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchEmployees() {
    const response = await fetch(`${BASE_URL}/employee`);
    if (!response.ok) {
        throw new Error(`Error fetching employees: ${response.statusText}`);
    }
    return await response.json();
}

export async function createEmployee(data) {
    const response = await fetch(`${BASE_URL}/employee/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating employee: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateEmployee(id, data) {
    const response = await fetch(`${BASE_URL}/employee/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating employee: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteEmployee(id) {
    const response = await fetch(`${BASE_URL}/employee/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting employee: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Order calls
//////////////////////////////
export async function fetchOrder(id) {
    const response = await fetch(`${BASE_URL}/orders/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching order: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchOrders() {
    const response = await fetch(`${BASE_URL}/orders`);
    if (!response.ok) {
        throw new Error(`Error fetching orders: ${response.statusText}`);
    }
    return await response.json();
}

export async function createOrder(data) {
    const response = await fetch(`${BASE_URL}/orders/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating order: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateOrder(id, data) {
    const response = await fetch(`${BASE_URL}/orders/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating order: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteOrder(id) {
    const response = await fetch(`${BASE_URL}/orders/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting order: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Order Item calls
//////////////////////////////
export async function fetchAllOrderItems(orderID) {
    const response = await fetch(`${BASE_URL}/order_item/${orderID}`);
    if (!response.ok) {
        throw new Error(`Error fetching order: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchOrderItem(orderID, itemID) {
    const response = await fetch(`${BASE_URL}/order_item/${orderID}/${itemID}`);
    if (!response.ok) {
        throw new Error(`Error fetching order: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchAllItemsOrdered() {
    const response = await fetch(`${BASE_URL}/order_item`);
    if (!response.ok) {
        throw new Error(`Error fetching orders: ${response.statusText}`);
    }
    return await response.json();
}

export async function createOrderItem(data) {
    const response = await fetch(`${BASE_URL}/order_item/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating order item: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateOrderItem(orderID, itemID, data) {
    const response = await fetch(`${BASE_URL}/order_item/${orderID}/${itemID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating order: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteAllOrderItems(orderID) {
    const response = await fetch(`${BASE_URL}/order_item/${orderID}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting order item: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteOrderItem(orderID, itemID) {
    const response = await fetch(`${BASE_URL}/order_item/${orderID}/${itemID}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting order item: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Reservation calls
//////////////////////////////
export async function fetchReservation(id) {
    const response = await fetch(`${BASE_URL}/reservation/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching reservation: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchReservations() {
    const response = await fetch(`${BASE_URL}/reservation`);
    if (!response.ok) {
        throw new Error(`Error fetching reservations: ${response.statusText}`);
    }
    return await response.json();
}

export async function createReservation(data) {
    const response = await fetch(`${BASE_URL}/reservation/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating reservation: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateReservation(id, data) {
    const response = await fetch(`${BASE_URL}/reservation/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating reservation: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteReservation(id) {
    const response = await fetch(`${BASE_URL}/reservation/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting reservation: ${response.statusText}`);
    }
    return await response.json();
}


//////////////////////////////
// Time Log calls
//////////////////////////////
export async function fetchTimeLog(id) {
    const response = await fetch(`${BASE_URL}/time_log/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching time log: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchTimeLogs() {
    const response = await fetch(`${BASE_URL}/time_log`);
    if (!response.ok) {
        throw new Error(`Error fetching time logs: ${response.statusText}`);
    }
    return await response.json();
}

export async function createTimeLog(data) {
    const response = await fetch(`${BASE_URL}/time_log/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating time log: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateTimeLog(id, data) {
    const response = await fetch(`${BASE_URL}/time_log/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating time log: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteTimeLog(id) {
    const response = await fetch(`${BASE_URL}/time_log/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting time log: ${response.statusText}`);
    }
    return await response.json();
}