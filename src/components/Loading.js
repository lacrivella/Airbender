import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        const done = this.props.done;
        if(done) {
            return /*html*/ `
                <div></div>
            `;
        }

        return /*html*/ `
            <div class="loading">
                <img src="./assets/loading.gif" alt="intro from avatar the last airbend">
            </div>
        `;
    }
}

export default Loading;