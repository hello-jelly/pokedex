const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex/types';

export function getTypes(types) {  
    const page = types.page || 1;
    const search = types.search;

    const url = `${URL}?page=${page || 1}&search=${search || ''}`;
    return fetch(url)
        .then(response => response.json());
}