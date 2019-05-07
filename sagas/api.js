const urlAPI = 'https://jsonplaceholder.typicode.com/posts';

function* getDataApi() {
    const response = yield  fetch(urlAPI, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: ''
    });

    const data = yield response.status === 200 ? JSON.parse(response._bodyInit)  : [];
    return data;
}

function* postAddDataApi(newData = {}){
    const response = yield fetch(urlAPI, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            title: newData.title,
            description: newData.description
        })
    })
}

export const Api = {
    getDataApi
}