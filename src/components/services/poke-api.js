const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function pokemon(options) {
    const page = options.page || 1;

    const url = `${URL}?page=${page || 1}&pokemon=${options.search || ''}&type=${options.type || ''}&eggGroup=${options.eggGroup || ''}&direction=desc`;
    
    return fetch(url).then(response => response.json());
}

// &ability=${options.ability || ''}&attack=${options.attack || ''}&defense=${options.defense || ''}