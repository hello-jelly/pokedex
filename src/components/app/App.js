import Component from '../Component.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Search from '../options/Search.js';
import Paging from '../options/Paging.js';
import PokeList from '../pokedex/PokeList.js';
import { pokemon } from '../services/poke-api.js';
import hashStorage from '../services/hash-storage.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
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

        const search = new Search();
        const searchDOM = search.renderDOM();
        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(searchDOM);
        
        const footer = new Footer();
        const footerDOM = footer.renderDOM();
        dom.appendChild(footerDOM);

        loadPoke();

        window.addEventListener('hashchange', () => {
            loadPoke();
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
            <main>
                <section class="options-section"></section>
                <section class="list-section"></section>
            </main>
                <!--- Footer goes here --->
            </div>
    `;
    }
}

export default App;