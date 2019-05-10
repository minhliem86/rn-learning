const urlAPI = 'https://reqres.in/api/unknown';
const urlCreateAPI = 'https://reqres.in/api/users'

function* getDataApi() {
    const response = yield  fetch(urlAPI, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: ''
    });

    const data = yield response.status === 200 ? JSON.parse(response._bodyInit).data  : [];
    return data;
}

function* postAddDataApi(newData = {}){
    const response = yield fetch(urlCreateAPI, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: newData.name,
            job: newData.job
        })
    })

    return yield (response.status === 201)
}

export const Api = {
    getDataApi,
    postAddDataApi,
}