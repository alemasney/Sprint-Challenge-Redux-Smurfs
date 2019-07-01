1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    map, filter, concat.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    action - the call to change or update information

    reducer - depending on the case, this will manipulate the state according to the action provided.

    store - the application state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state - state for entire application, usually has all data.

    Component state - state that pertains to the component, ex: input field.

1.  What is middleware?

    catches actions that have been dispatched before it gets to the stores reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    allows you to flow asynchronous and make API calls from the actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect