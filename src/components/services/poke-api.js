const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function getTypes(options) {
    const page = options.page;
    const search = options.search;

    const url = `${URL}?page=${page || 1}?search=${search || 1}`;
    
    return fetch(url)
        .then(response => response.json());
}