const redux = require("redux");

const reducerFuntion = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = redux.createStore(reducerFuntion);

const subscriberComponent = () => {
  const currentState = store.getState();
  console.log(currentState);
};

store.subscribe(subscriberComponent);

store.dispatch({ type: "INCREMENT" });
