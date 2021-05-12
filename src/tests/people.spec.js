import { expect } from 'chai';

import * as peopleApi from './api';

describe('people', () => {
  describe('people : [Person]', () => {
    it('returns a array of people', async () => {
      const expectedResult = {
        data: {
          people : {
            
          },
        },
      };
 
      const result = await peopleApi.people();

      console.log(result.data)
 
      expect(result.data).to.eql(expectedResult);
    });
  });
});