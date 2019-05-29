import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        const src = character.photoUrl || '../../../assets/placeholder.png';
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${src}" alt="${character.name}">
            </li>
        `;
    }
}

export default CharacterItem;