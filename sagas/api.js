const urlAPI = 'http://laravel-node2019.herokuapp.com/api';

function* getDataApi() {
    const response = yield fetch(urlAPI + '/rooms', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: ''
    })
    const data = yield response.status === 200 ? JSON.parse(response._bodyInit)  : [];
    return data;
}

function* postAddDataApi(newData = {}){
    const response = yield fetch(urlAPI + '/rooms', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            type: newData.type,
            number: newData.number,
            price: newData.price,
            hasWifi: newData.hasWifi,
            min: newData.min,
            max: newData.max,
        })
    })

    return yield (response.status === 201)
}

function* postDeleteDataApi(id){
    console.log(urlAPI + '/rooms' + `/${id}`);
    const response = yield fetch(urlAPI + '/rooms' + `/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: ''
    });
    return yield(response.status === 204 );
}

function* postUpdateDataApi(editData, id){
    const response = fetch (urlAPI + '/rooms' + `/${id}` , {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(editData)
    });
    return data = yield response.status === 200 ? JSON.stringify(response._bodyInit) : '';
}

export const Api = {
    getDataApi,
    postAddDataApi,
    postDeleteDataApi,
    postUpdateDataApi
}