import PeopleApi from './people';
import HomeworldAPI from './homeworld';

const dataSources = () => ({
    peopleAPI: new PeopleApi(),
    homeworldAPI: new HomeworldAPI()
})

export default dataSources;