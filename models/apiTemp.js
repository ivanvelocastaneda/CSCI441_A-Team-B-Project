//////////////////////////////
// Template calls
//////////////////////////////
export async function fetchFunctTemp(id) {
    const response = await fetch(`${BASE_URL}/urlTemp/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching msgTemp: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchFunctTemps() {
    const response = await fetch(`${BASE_URL}/urlTemp`);
    if (!response.ok) {
        throw new Error(`Error fetching msgTemps: ${response.statusText}`);
    }
    return await response.json();
}

export async function createFunctTemp(data) {
    const response = await fetch(`${BASE_URL}/urlTemp/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error creating msgTemp: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateFunctTemp(id, data) {
    const response = await fetch(`${BASE_URL}/urlTemp/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error updating msgTemp: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteFunctTemp(id) {
    const response = await fetch(`${BASE_URL}/urlTemp/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Error deleting msgTemp: ${response.statusText}`);
    }
    return await response.json();
}