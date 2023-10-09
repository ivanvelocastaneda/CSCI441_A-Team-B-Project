import * as MenuItemService from '../services/menuItemService.js';

export const getMenuItems = async (req, res) => {
    const id = req.params.id;
    const menuItem = await MenuItemService.getMenuItems();
    res.json(menuItem);
};

export const getMenuItem = async (req, res) => {
    const id = req.params.id;
    const menuItem = await MenuItemService.getMenuItemById(id);
    res.json(menuItem);
};

export const createNewMenuItem = async (req, res) => {
    const newMenuItem = req.body;
    const createdMenuItem = await MenuItemService.createMenuItem(newMenuItem);
    res.json(createdMenuItem);
};

export const updateExistingMenuItem = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedMenuItem = await MenuItemService.updateMenuItem(id, updatedData);
    res.json(updatedMenuItem);
};

export const removeMenuItem = async (req, res) => {
    const id = req.params.id;
    const deletedMenuItem = await MenuItemService.deleteMenuItem(id);
    res.json(deletedMenuItem);
};
