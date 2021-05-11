import axios from "axios"

export default {
    Query: {
        people: async (_, { pageNumber = 1 }, { dataSources }) => {

            const people = await dataSources.peopleAPI.getPeople({ pageNumber })

            return {
                hasMore: (people.next) ? true : false,
                results: people.results
            }
        },
        person: (_, { id }, { dataSources }) => {
            return dataSources.peopleAPI.getPersonById({ personId: id });
        }
    },

};