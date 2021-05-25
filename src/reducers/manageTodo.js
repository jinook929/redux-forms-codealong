export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);

  switch(action.type) {
    case "ADD_TODO":
      console.log({todos: state.todos.concat(action.payload.text)})
      return {todos: state.todos.concat(action.payload.text)}

    default:
      return state
  }
  // if(action.type === "ADD_TODO") {
  //   state = {todos: [...state.todos, action.payload]}
  // }
  // return state;
}
