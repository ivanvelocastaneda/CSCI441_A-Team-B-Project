// const BASE_URL = "https://csci441-teamb.onrender.com";


// export const getMenuItems = async () => {
//     const response = await fetch(`${BASE_URL}/menu_item`);
//     // console.log(response.json());
//     return response.json();
// };

// export const getMenuItemById = async (id) => {
//     const response = await API.fetch(`${BASE_URL}/menu_item/${id}`);
//     return response.json();
// };

// export const createMenuItem = async (menuItem) => {
//     const response = await API.post(`${BASE_URL}/menu_item`, menuItem);
//     return response.json();
// };

// export const updateMenuItem = async (id, updatedData) => {
//     const response = await API.put(`${BASE_URL}/menu_item/${id}`, updatedData);
//     return response.json();
// };

// export const deleteMenuItem = async (id) => {
//     const response = await API.delete(`${BASE_URL}/menu-item/${id}`);
//     return response.json();
// };



const BASE_URL = "https://csci441-teamb.onrender.com";

export async function fetchMenuItems() {
    const response = await fetch(`${BASE_URL}/menu_item`);
    if (!response.ok) {
        throw new Error(`Error fetching menu items: ${response.statusText}`);
    }
    return await response.json();
}


