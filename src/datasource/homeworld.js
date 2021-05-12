const { RESTDataSource } = require('apollo-datasource-rest');

class HomeworldAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev';
    }

    async getHomeworld({ link }) {
        const responses = await this.get(`${new URL(link).pathname}`);

        return this.homeworldReducer(responses);
    }


    homeworldReducer(homeworld, index) {
        return {
            id: index,
            name: homeworld.name,
            gravity: homeworld.gravity,
            terrain: homeworld.terrain,
            population: homeworld.population
        }
    }
}

module.exports = HomeworldAPI;