import PokeItem from '../src/components/pokedex/PokeItem.js';

const test = QUnit.test;

QUnit.module('Render Pokemon Item');

test('test name', assert => {
    // arrange
    const pokemon = {
        '_id': '5cef3501ef6005a77cd4fdd0',
        'pokemon': 'pichu',
        'id': 187,
        'species_id': 172,
        'height': 3,
        'weight': 20,
        'base_experience': 41,
        'type_1': 'electric',
        'type_2': 'NA',
        'attack': 40,
        'defense': 15,
        'hp': 20,
        'special_attack': 35,
        'special_defense': 35,
        'speed': 60,
        'ability_1': 'static',
        'ability_2': 'NA',
        'ability_hidden': 'lightning-rod',
        'color_1': '#F8D030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'no-eggs',
        'egg_group_2': 'NA',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        'generation_id': 2,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 10,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'pichu',
        'pokedex': 'http://www.pokemon.com/us/pokedex/pichu'
    };

    const expected = /*html*/ `
        <div class="poke-item">
            <li class="poke-id">${pokemon.pokemon}</li>
        <div class="types">
            <li style="background-color: ${pokemon.color_1}" class="type-1">${pokemon.type_1}</li>
            <li style="background-color: ${pokemon.color_2}"class="type-2">${pokemon.type_2}</li>
        </div>
        <div class="image-container">
            <img class="poke-img" src="${pokemon.url_image}" alt="${pokemon.pokemon}>
        </div>
            <li class="egg-group">${pokemon.egg_group_1}</li>
            <li class="ability">${pokemon.ability_1}, ${pokemon.ability_2}, ${pokemon.ability_hidden}</li>
            <li class="attack-defense">Attack: ${pokemon.attack} | Defense: ${pokemon.defense}</li>
        </div>
    `;

    // act
    const props = { pokemon: pokemon };
    const pokeItem = new PokeItem(props);
    const html = pokeItem.renderHTML();
    // assert
    assert.htmlEqual(html, expected);
});