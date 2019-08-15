import Component from '../Component.js';
import Header from '../app/Header.js';
import PokeList from '../pokedex/PokeItem';

// import FilterPokemon from '../options/FilterPokemon.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const pokeList = new PokeList({ pokemons: [] });
        const pokeListDOM = pokeList.renderDOM();
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(pokeListDOM);

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokeList.update({ pokemons: data });
            });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                
                <main>
                    <section class="options-section">
                        <div class="nav-bar">
                            <h2>Search Pokédex</h2>
                            <p>Search by Name, Type, Egg Group, Attack, or Defense attributes in the Pokédex</p>
                            <input type="text">
                            <button id="search-button">SEARCH</button>

                            <select>
                                <option selected >GOTTA SORT 'EM ALL!</option>
                                <option>BY NAME</option>
                                <option>BY ID</option>
                                <option>BY TYPE</option>
                                <option>EGG GROUP</option>
                                <option>ATTACK</option>
                                <option>DEFENSE</option>
                            </select>
                        </div>        
                    </section>
                        
                    <section class="list-section">
                        <ul class="pokedex">
                            <div class="poke-item">
                                <li class="poke-id">#123 TANGELA</li>
                                <li class="ability">chlorophyll, leaf-guard, regenerator</li>
                                <div class="image-container">
                                    <img class="poke-img" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png">
                                </div>
                                <li class="attack-defense">Attack: 55 | Defense: 115</li>
                            </div>
                        </ul>        
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;