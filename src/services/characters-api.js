const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const characterApi = {
    getCharacters(enemies) {

        let url = URL;

        if(enemies) {
            const searchParams = new URLSearchParams;
            searchParams.set('enemies', enemies);
            const query = searchParams.toString();
            url = `${URL}?${query}`;
        }
        return fetch(url)
            .then(response => response.json());
    }
};

export default characterApi;