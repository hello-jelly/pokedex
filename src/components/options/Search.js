import Component from '../Component.js';
import hashStorage from '../services/hash-storage.js';

class Search extends Component {

    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const search = formData.get('search');
            const type = formData.get('type');
            const eggGroup = formData.get('eggGroup');
            const ability = formData.get('ability');
            const attack = formData.get('attack');
            const defense = formData.get('defense');

            hashStorage.set({ 
                search,
                type,
                eggGroup,
                ability,
                attack,
                defense,
                page: 1
            });
        });

        const inputSearch = form.querySelector('[name="search"]');
        const inputType = form.querySelector('[name="type"]');
        const inputEggGroup = form.querySelector('[name="eggGroup"]');
        const inputAbility = form.querySelector('[name="ability"]');
        const inputAttack = form.querySelector('[name="attack"]');
        const inputDefense = form.querySelector('[name="defense"]');

        window.addEventListener('hashchange', () => {
            inputSearch.value = hashStorage.get().search || '';
            inputType.value = hashStorage.get().type || '';
            inputEggGroup.value = hashStorage.get().eggGroup || '';
            inputAbility.value = hashStorage.get().ability || '';
            inputAttack.value = hashStorage.get().attack || '';
            inputDefense.value = hashStorage.get().defense || '';
        });
    }

    renderHTML() {
        const search = hashStorage.get().search || '';
        const type = hashStorage.get().type || '';
        const eggGroup = hashStorage.get().eggGroup || '';
        const ability = hashStorage.get().ability || '';
        const attack = hashStorage.get().attack || '';
        const defense = hashStorage.get().defense || '';

        return /*html*/`
            <form>
                <div class="search-name">
                    <h2>Search By Name:</h2>
                    <label>
                        <input name="search" value="${search}" type="text">
                    </label>
                </div>

                <div class="filter-by">
                    <h2>Filter By:</h2>
                    <select>
                        <option name="type" value="${type}" type="text">TYPE</option>
                        <option name="eggGroup" value="${eggGroup}" type="text">EGG GROUP</option>
                        <option name="ability" value="${ability}" type="text">ABILITY</option>
                        <option name="attack" value="${attack}" type="text">ATTACK</option>
                        <option name="defense" value="${defense}" type="text">DEFENSE</option>
                    </select>
                    <label>
                        <input name="" value="" type="text">
                    </label>
                </div>
                
                <button id="search-button">SEARCH</button>
            </form>
        `;
    }
}

export default Search;