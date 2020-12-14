const METHODS = { //Вот это методы
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE'
};
interface HttpOptions { //Это HttpOptions
    headers:string
    method: string // а лучше method: 'GET' | 'POST' | и так далее
    data: string,
    options: object
    timeout: 5000
}
/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data:any) {
    let res = '?'
    for (const [key, value] of Object.entries(data)) {
        res += key + '=' + value + '&'
    }
    res = res.slice(0, res.length-1)
    return res
}
export class HTTPTransport {
    get = (url: any, options:HttpOptions) => {
        if(options.data)
            options.data = queryStringify(options.data)
        url += options.data
        return this.request(queryStringify(url), {...options, method: METHODS.GET}, options.timeout);
    };
    post = (url: any, options:HttpOptions) => {

        url += options.data
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };
    put = (url: any, options:HttpOptions) => {

        url += options.data
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };
    delete = (url: any, options:HttpOptions) => {

        url += options.data
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };
    // headers — obj
    // data — obj
//метод request - сам метод который делает реквест
    request = (url: string, options: { method: string }, timeout = 5000) => {
        const {headers, method, data} = options
        return new Promise(((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function() {
                resolve(xhr)
            };
            xhr.timeout = timeout
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (headers) {
                for (const [key, value] of Object.entries(headers)) {
                    xhr.setRequestHeader(key, value.toString())
                }
            }
            if (method === 'GET' || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        }))
    };
}



// let a = new HTTPTransport()
// a.request('https://google.com/', {method: METHODS.GET, headers:{}}, 5000).then(
//     (data)=>{
//         console.log(data)
// })