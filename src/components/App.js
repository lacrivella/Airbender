import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import characterApi from '../services/characters-api.js';
import Loading from './Loading.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const characterList = new CharacterList({ characters: [] });
        main.appendChild(characterList.render());

        const loading = new Loading({ done: false });
        const loadingDOM = loading.render();
        main.appendChild(loadingDOM);

        function loadEnemies() {
            const params = window.location.hash.slice(1);
    
            const searchParams = new URLSearchParams(params);
            const enemies = searchParams.get('enemies');
    
            // loading.update({ loading: false });

            characterApi.getCharacters(enemies)
                .then(characters => {
                    characterList.update({ characters });
                })
                .finally(() => {
                    loading.update({ done: true });
                });
        }

        loadEnemies();
        
        window.addEventListener('hashchange', () => {
            loadEnemies();
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;
