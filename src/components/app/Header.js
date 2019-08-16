import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <div class="logo-container">
                    <img class="animated rubberBand delay-2s" src="./assets/pokedex-logo.png" alt="Pokédex Logo">
                </div>
            </header>
        `;
    }
}

export default Header;