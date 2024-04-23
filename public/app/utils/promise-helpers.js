export const handleStatus = res => 
    res.ok ? res.json() : Promise.reject(res.statusText);

export const log = param => {
    console.log(param);

    return param;
};

export const timeoutPromise = (milliseconds, promise) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => 
            reject('Limite de tempo excedido! Tente novamente mais tarde.'),
        milliseconds); 
    });

    return Promise.race([
        timeout, promise
    ]);
}

export const delay = milliseconds => data =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), milliseconds);
    });