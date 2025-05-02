export const initialStore=()=>{
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ], 
    name:"dayana",
    email: "",
  }
}

export default function storeReducer(store, action = {}) {
  //action= {type:"", payload: "datos"} 
  //payload, puede ser cualquier tipo de dato, {}, [], "", boolean, num

  switch(action.type){
    //ese seria el set de un useState
    case 'add_task':
      const { id,  color } = action.payload
      
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case "change_email": 
      //cambiar la propiedad del store
      return {
        ...store,
        email: action.payload //datos del nuevo email
      }
    
    case "modify_task":
      //recibe un objeto, de la tarea a modifcar

    default:
      throw Error('Unknown action.');
  }    
}
