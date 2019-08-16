import Component from '../Component.js';
import hashStorage from '../services/hash-storage.js';

class Search extends Component {

    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const search = formData.get('search');

            hashStorage.set({ 
                search: search,
                page: 1
            });
        });

        const input = form.querySelector('input');

        window.addEventListener('hashchange', () => {
            input.value = hashStorage.get().search || '';
        });
    }

    renderHTML() {
        const search = hashStorage.get().search || '';

        return /*html*/`
            <form>
                <input name="search" value="${search} type="text">
                <button id="search-button">SEARCH</button>
            </form>
        `;
    }
}



export default Search;