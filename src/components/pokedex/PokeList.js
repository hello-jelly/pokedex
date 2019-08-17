import Component from '../Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    
    onRender(dom) {
        const pokemon = this.props.pokemon;
        pokemon.forEach(pokemon => {
            const props = { pokemon };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokeItemDOM);
        });
    }

    renderHTML() {
        
        return /*html*/`
            <ul class="pokedex"></ul>
        `;
    }
}

export default PokeList;