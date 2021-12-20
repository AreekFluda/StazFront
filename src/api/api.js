import axios from "axios";

let backendAddress = "http://localhost:8080/";

function sendRequest(address, endpoint, method, body, headers) {
    headers["Content-Type"] = "application/json";
    return axios({
        method: method.toLowerCase(),
        url: address + endpoint,
        headers: headers,
        data: body
    });
}

export function getUsers() {
    return sendRequest(
        backendAddress,
        'users',
        'get',
        {},
        {}
    );
}

export function registerUser(name, email, password) {
    return sendRequest(
        backendAddress,
        'users',
        'post',
        {name, email, password},
        {}
    )
}



export function loginUser(name, email, password) {
    return sendRequest(backendAddress,
        'login',
        'post',
        {name, email, password},
        {})
}

export function getAllLectures() {
    return sendRequest(backendAddress,
        'lecture', 'get'
        , {}, {})
}

export function getAllParticipants() {
    return sendRequest(backendAddress, 'participants', 'get', {}, {})
}

