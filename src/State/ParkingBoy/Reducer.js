const initialState = {
    inputValue : "",
    todoList : []
};

export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_INPUT_VALUE":
        return {...state, inputValue: action.payload};
    default:
        return state;
    }
};