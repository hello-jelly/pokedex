import Component from '../Component.js';

class PokeItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
        <div class="poke-item">
            <li class="poke-id">${pokemon.pokemon}</li>
            <li class="ability">${pokemon.ability_1}, ${pokemon.ability_2}, ${pokemon.ability_hidden}</li>
            <div class="image-container">
                <img class="poke-img" src="${pokemon.url_image}" alt="${pokemon.pokemon}>
            </div>
            <li class="attack-defense">Attack: ${pokemon.attack} | Defense: ${pokemon.defense}</li>
        </div>
        `;
    }
}

export default PokeItem;