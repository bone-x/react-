import testApi from '../../../utils';
export default {
  namespace: 'aboutpage',
  state: {
    data: [],
    total: 0,
  },
  reducers: {
    setData(state, action) {
      //11这里还可以接收 {payload：{data}}
      console.log(action.payload);
      return { ...state, ...action.payload }; //11  return { ...state,...data}
      //return Object.assign({}, state, {data: data, showLoading: false};
    },
  },
  effects: {
    *getData({ payload }, { call, put }) {
      let rel = yield call(testApi.testGet);
      console.log(111111111);
      if (rel) {
        yield put({
          type: 'setData',
          payload: { data: rel.data }, //11 payload:{...rel}
        });
      }
    },
  },
};
