const apiUrl='https://nettuts.hu/jms/ondovivi97/';

export const getAll = (entity = 'users') => {
    return fetch (apiUrl + entity).then(res=>res.json());
}
