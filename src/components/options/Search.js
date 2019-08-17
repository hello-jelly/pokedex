import Component from '../Component.js';
import hashStorage from '../services/hash-storage.js';

class Search extends Component {

    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const search = formData.get('search');
            const filter = formData.get('filter');
            const filterParam = formData.get('filter-param');

            hashStorage.set({ 
                search,
                filter,
                filterParam,
                page: 1
            });
        });

        const inputSearch = form.querySelector('[name="search"]');
        const inputFilter = form.querySelector('[name="filter"]');

        window.addEventListener('hashchange', () => {
            inputSearch.value = hashStorage.get().search || '';
            inputFilter.value = hashStorage.get().filter || '';
        });
    }

    renderHTML() {
        const search = hashStorage.get().search || '';
        const filter = hashStorage.get().filter || '';
        const selectedFilterParam = hashStorage.get().filterParam || '';

        return /*html*/`
            <form>
                <div class="search-name">
                    <h2>Search By Name:</h2>
                    <label>
                        <input class="name-input" name="search" value="${search}" type="text">
                    </label>
                </div>

                <div class="filter-by">
                    <h2>Filter By:</h2>
                    <select class="filter-param" name="filter-param">
                        <option value="type" type="text" ${this.selectedFilterParam(selectedFilterParam, 'type')}>TYPE</option>
                        <option value="eggGroup" type="text" ${this.selectedFilterParam(selectedFilterParam, 'eggRoup')}>EGG GROUP</option>
                        <option value="ability" type="text" ${this.selectedFilterParam(selectedFilterParam, 'ability')}>ABILITY</option>
                        <option value="attack" type="text" ${this.selectedFilterParam(selectedFilterParam, 'attack')}>MIN ATTACK</option>
                        <option value="defense" type="text" ${this.selectedFilterParam(selectedFilterParam, 'defense')}>MIN DEFENSE</option>
                    </select>
                    <label>
                        <input class="filter-input" name="filter" value="${filter}" type="text">
                    </label>
                </div>
                
                <button id="search-button">SEARCH</button>
            </form>
        `;
    }

    selectedFilterParam(selectedFilterParam, filterParam) {
        let selectedFilter = '';
        if(selectedFilterParam === filterParam) {
            selectedFilter = 'selected';
        }
        return selectedFilter;
    }
}

export default Search;