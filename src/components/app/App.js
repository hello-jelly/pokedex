import Component from '../Component.js';
import Header from '../app/Header.js';
import PokeList from '../pokedex/PokeList.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        let pokeList;
        let pokeListDOM;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokeList = new PokeList({ pokemon: data });
                pokeListDOM = pokeList.renderDOM();
                const pokeDex = dom.querySelector('.list-section');
                pokeDex.appendChild(pokeListDOM);
            });
    }

    renderHTML() {
        return /*html*/`
            <div class="layout">
                <section class="options-section">
                    <h2>Search Pokédex</h2>
                    <p>Search by Name, Type, Egg Group, Attack, or Defense</p>
                    
                    <form>
                    <input type="text">
                    <button id="search-button">SEARCH</button>
                    </form>
                        
                    <select>
                        <option selected >SORT 'EM ALL!</option>
                        <option>BY NAME</option>
                        <option>BY ID</option>
                        <option>BY TYPE</option>
                        <option>EGG GROUP</option>
                        <option>ATTACK</option>
                        <option>DEFENSE</option>
                    </select>
                </section>
                    
                <section class="list-section"></section>
            </div>
        `;
    }
}

export default App;