const axios = require("axios")


export default {
    Query: {
        homeworld: async (parent, { id }) => {
            try {
                const homeworld = await axios.get(`https://swapi.dev/api/planets/${id}`)

                return { ...homeworld.data, id: id };

            } catch (error) {
                throw error
            }
        }
    }
};