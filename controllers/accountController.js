import * as AccountService from '../services/accountService.js';

class accountController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    loadAccount(accountType) {
        AccountService.getAccountDetails(accountType)
            .then(account => {
                this.model.update(account);
                this.view.update(account);
            });
    }
}