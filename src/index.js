import App from './components/app/App.js';

const root = document.getElementById('root');
const app = new App();

const dom = app.renderDOM();

root.appendChild(dom);