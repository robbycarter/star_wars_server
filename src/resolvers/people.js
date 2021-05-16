import axios from "axios"

export default {
    Query: {
        people: async (_, { pageNumber = 1 }, { dataSources }) => {

            const people = await dataSources.peopleAPI.getPeople({ pageNumber })

            return {
                count: people.count,
                hasMore: (people.next) ? true : false,
                results: people.results
            }
        },
        person: (_, { id }, { dataSources }) => {
            return dataSources.peopleAPI.getPersonById({ personId: id });
        },
        searchPerson: async (_, { name }, { dataSources }) => {
            const people = await dataSources.peopleAPI.searchPerson({ name: name });
            
            return {
                count: people.count,
                hasMore: (people.next) ? true : false,
                results: people.results
            }
        }
    },
    Person: {
        homeworld: async (parent, _, { dataSources }) => {
            // Get Homeworld data
            return dataSources.homeworldAPI.getHomeworld({ link: parent.homeworld })
        }
    }

};