import {backendUrl} from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {

    //helper function for unauthenticated post request
    const response = await fetch(backendUrl + route, 
        {   method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    const formattedResponse = await response.json();
    return formattedResponse;
};

export const makeAuthenticatedPOSTRequest = async (route, body) => {

    //helper function for authenticated post request
    const token = getToken();
    const response = await fetch(backendUrl + route, 
        {   method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
    const formattedResponse = await response.json();
    return formattedResponse;
    
}

export const makeAuthenticatedGETRequest = async (route) => {

    //helper function for authenticated get request
    const token = getToken();
    const response = await fetch(backendUrl + route, 
        {   method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
    const formattedResponse = await response.json();
    return formattedResponse;
    
}

const getToken = () => {
    const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return accessToken;
}