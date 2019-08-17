import Component from '../Component.js';
import hashStorage from '../services/hash-storage.js';

class Sort extends Component {
    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const searchParam = formData.get('search-param');

            hashStorage.set({ 
                searchParam,
                page: 1
            });
        });
        const option = form.querySelector('option');

        window.addEventListener('hashchange', () => {
            option.value = hashStorage.get().sort || '';
        });
    }

    
    renderHTML() {
        return /*html*/`
            <form>
                <h2>Search By:</h2>
                <select name="search-param">
                    <option value="name">NAME</option>
                    <option value="type">TYPE</option>
                    <option value="egg-group">EGG GROUP</option>
                    <option value="ability">ABILITY</option>
                    <option value="attack">ATTACK</option>
                    <option value="defense">DEFENSE</option>
                </select>
            </form>
        `;
    }
}

export default Sort;