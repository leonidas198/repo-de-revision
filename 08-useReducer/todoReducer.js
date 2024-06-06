

export const todoReducer = ( inititalState = [],  action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [
                ...inititalState, action.payload
            ];
        case '[TODO] Remove Todo':
            return inititalState.filter( todo => todo.id !== action.payload );  
                 
            
    
        default:
            return inititalState;
    }

}