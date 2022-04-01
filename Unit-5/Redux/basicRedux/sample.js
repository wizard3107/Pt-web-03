const reducer = (state, action) => {
    return state
}
class Store {
    constructor(reducer, state) {
        this.reducer = reducer;
        this.state = state;
    }
    getState() {
        return this.state;
    }
    dispatch(action) {
        return this.reducer(this.state, action)
    }
}

let store = new Store(reducer, { counter: 0 })
console.log(store.getState());