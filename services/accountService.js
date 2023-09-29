import * as API from '../models/api.js';

export function getAccountDetails(accountType) {
    return API.fetchAccount(accountType)
        .then(account => {
            return account;
        });
}