import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Paging extends Component {
    onRender(dom) {
        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');
        if(!prevButton) {
            return;
        }

        const currentPage = this.props.currentPage || 1;
        function updatePage(increment) {
            hashStorage.set({ page: currentPage + increment });
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });
        
        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }

    renderHTML() {
        const currentPage = this.props.currentPage || 1;
        const perPage = 20;
        const totalCount = this.props.totalCount;

        if(!totalCount) {
            return /*html*/`
                <p class="paging">No results, try another search</p>
            `;
        }

        const lastPage = Math.ceil(totalCount / perPage);

        return /*html*/`
            <p class="paging">
                <button class="prev" ${currentPage === 1 ? 'disabled' : ''}>◀</button>
                <span>Page ${currentPage} of ${lastPage}</span>
                <button class="next" ${currentPage === lastPage ? 'disabled' : ''}>▶</button>
            </p>
        `;
    }
}

export default Paging;