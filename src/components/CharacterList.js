import Component from './Component.js';

class CharacterList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul class="character-list">
                <li>
                    <h2>46th Earth King</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
                </li>
                <li>
                    <h2>Aang</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003" alt="Aang">
                </li>
                <li>
                    <h2>Aang (games)</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/2/21/Into_The_Inferno_Aang.png/revision/latest?cb=20131009060746" alt="Aang (games)">
                </li>
            </ul>
        `;
    }
}

export default CharacterList;