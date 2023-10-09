const BASE_URL = "https://csci441-teamb.onrender.com";

export const fetch = async (url) => {
    return await fetch(url);
};

export const post = async (url, data) => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

export const put = async (url, data) => {
    return await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

export const deleting = async (url) => {
    return await fetch(url, {
        method: 'DELETE'
    });
};
