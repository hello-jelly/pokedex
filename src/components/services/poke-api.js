const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function pokemon(options) {
    const page = options.page || 1;
    let filterArgument = '';
    if(options.filter) {
        filterArgument = `&${options.filterParam}=${options.filter}`;
    }

    const url = `${URL}?page=${page || 1}&pokemon=${options.search || ''}${filterArgument}&direction=desc`;
    
    return fetch(url).then(response => response.json());
}