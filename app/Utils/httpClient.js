import axios from 'axios';
import ApiConfig from 'app/config/configUrl'
const httpClient = axios.create({
    baseURL: `${ApiConfig.BASE_URL}`,
});
export function setDefaultHeader(header, value) {
    httpClient.defaults.headers.common[header] = value
}
export async function apiCall(method, url, data, header = { 'Content-Type': 'application/json' }) {
    try {
        console.log('url',url)
        const res = await httpClient({
            method,
            url,
            data: data,
            headers: header,
            withCredentials: false
        })
       console.log("res==", res)
        return res;
    }
    catch (error) {
        console.log("error", error);
        if (error.response) {
        } else
            if (error.request) {
                console.log('Error request : ', error.request);
            }
            else {
                console.log('Error message : ', error.message);
            }
        
        return error
    }
}