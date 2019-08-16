import Component from '../Component.js';

class PokeItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
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
    }
}

export default PokeItem;