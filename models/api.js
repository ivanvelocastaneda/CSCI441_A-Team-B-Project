const BASE_URL = "http://ec2-54-166-100-85.compute-1.amazonaws.com:3100";

export function fetchAccount(accountType) {
    return fetch(`${BASE_URL}/account/${accountType}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json().then(data => {
            console.log(data);
        });
    });
}