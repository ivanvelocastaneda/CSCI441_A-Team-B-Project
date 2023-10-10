const BASE_URL = "https://csci441-teamb.onrender.com";

export async function fetchMenuItems() {
    const response = await fetch(`${BASE_URL}/menu_item`);
    if (!response.ok) {
        throw new Error(`Error fetching menu items: ${response.statusText}`);
    }
    return await response.json();
}
