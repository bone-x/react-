import request from '../utils/request';
const testApi = {
  testGet() {
    return request(`http://jsonplaceholder.typicode.com/comments`, {
      hideTime: true,
    });
  },
};
export default testApi;
