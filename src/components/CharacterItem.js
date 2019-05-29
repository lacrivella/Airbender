import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        // const character = this.props.character;
        return /*html*/ `
        <li>
        <h2>46th Earth King</h2>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
        </li>
        `;
    }
}

export default CharacterItem;