import Component from '../Component.js';
import Header from '../app/Header.js';
import PokeList from '../pokedex/PokeList.js';
import Search from '../options/Search.js';
import Paging from '../options/Paging.js';
import { pokemon } from '../services/poke-api.js';
import hashStorage from '../services/hash-storage.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const optionsSection = dom.querySelector('.options-section');
        const search = new Search();
        optionsSection.appendChild(search.renderDOM());

        const listSection = dom.querySelector('.list-section');
        
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemon: [] });
        listSection.appendChild(pokeList.renderDOM());
        
        function loadPoke() {
            const options = hashStorage.get();
            pokemon(options).then(data => {
                const pokemon = data.results;
                const totalCount = data.count;

                pokeList.update({ pokemon: pokemon });
                paging.update({ 
                    totalCount: totalCount,
                    currentPage: +options.page
                });
            });
        }

        loadPoke();

        window.addEventListener('hashchange', () => {
            loadPoke();
        });
    }

    renderHTML() {
        return /*html*/`
            <div class="layout">
                <section class="options-section">
                    <div class="intro">
                    <h2>Sort The Pokédex</h2>
                    <p class="description">Use the menu or type in the search bar to sort the Pokédex by Name, ID, Type, Egg Group, Attack, or Defense.</p>
                    </div>
                        
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