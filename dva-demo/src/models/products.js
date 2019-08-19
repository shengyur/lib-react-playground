export default {
    namespace: 'products',
    state: [],
    reducers: {
        'del'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        }
    }
}