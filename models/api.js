const BASE_URL = "https://csci441-teamb.onrender.com";

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
