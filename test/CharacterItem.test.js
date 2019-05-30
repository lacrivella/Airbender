import CharacterItem from '../src/components/CharacterItem.js';
const test = QUnit.test;

QUnit.module('Character Item');

test('Rendering template from character data', assert => {
    const character = {
        name: '46th Earth King',
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441'
    };

    const characterItem = new CharacterItem({ character });
    const rendered = characterItem.renderTemplate();

    assert.htmlEqual(rendered, /*html*/ `
    <li>
        <h2>46th Earth King</h2>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
        <a href="#enemies=46th+Earth+King">Enemies</a>
        <a href="#allies=46th+Earth+King">Allies</a>
    </li>
    `);
});