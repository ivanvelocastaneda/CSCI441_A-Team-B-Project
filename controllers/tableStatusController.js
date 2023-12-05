import { fetchOrders } from "../models/api";


export class TableOrderController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.init();
    }

    async init() {
        const orders = await fetchOrders();
        orders.forEach(order => {
            this.view.addTable(order);
        });
    }

}