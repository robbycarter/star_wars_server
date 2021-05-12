import axios from 'axios';

const API_URL = 'http://localhost:8000/graphql';

export const people = async variables =>
    axios.post(API_URL, {
        query: `
          query {
            people {
              hasMore
              results {
                name
                height
                mass
                gender
                homeworld {
                  name
                  gravity
                  terrain
                  population
                }
              }
            }
          }
        `,
        variables,
    });