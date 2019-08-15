import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokeList extends Component {
    
    onRender(dom) {
        const pokemons = this.props.pokemons;

        pokemons.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokeItem = new PokemonItem(props);
            const pokemonItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });

    }

    renderHTML() {
        
        return /*html*/`
            <ul class="pokedex"></ul>
        `;
    }
}

export default PokeList;