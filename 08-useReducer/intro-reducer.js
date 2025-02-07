

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {
    
    if ( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payLoad ];
    }


    return state;

}


let todos = todoReducer();


const newTodo = {
    d: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

// El siguiente codigo es una practica no permitida en React.
/* todos.push({
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}); */

const addTodoAction = {
    type: '[TODO] add todo',
    payLoad: newTodo,
}



todos = todoReducer( todos, addTodoAction );

console.log( { state: todos } );