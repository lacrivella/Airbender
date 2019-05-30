import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;

        const enemyLink = new URLSearchParams();
        enemyLink.set('enemies', character.name);

        const alliesLink = new URLSearchParams();
        alliesLink.set('allies', character.name);

        const src = character.photoUrl || '../../../assets/placeholder.png';
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${src}" alt="${character.name}">
                <a href="#${enemyLink.toString()}">Enemies</a>
                <a href="#${alliesLink.toString()}">Allies</a>
            </li>
        `;
    }
}

export default CharacterItem;