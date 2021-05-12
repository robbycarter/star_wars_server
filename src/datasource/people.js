const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/people/';
    }

    async getPeople({ pageNumber }) {
        const responses = await this.get(`/?page=${pageNumber}`);

        responses.results = Array.isArray(responses.results) ?
            responses.results.map((person, index) => this.personReducer(person, index)) : [];

        return responses
    }

    async getPersonById({ personId }) {
        const responses = await this.get(personId);
        return this.personReducer(responses, personId);
    }

    personReducer(person, index) {
        return {
            id: index,
            name: person.name,
            height: person.height,
            mass: person.mass,
            gender: person.gender,
            homeworld: person.homeworld
        }
    }
}

module.exports = PeopleAPI;