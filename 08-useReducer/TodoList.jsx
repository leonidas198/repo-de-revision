import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types';

export const TodoList = ({ todos = [], onDeleteTodo }) => {



  return (
    
    <ul className="list-group">

        {
            todos.map( todo => (
                <TodoItem key={ todo.id } todo = { todo } onDeleteTodo={ onDeleteTodo }/>
            ) )
        }


    </ul>
    
  )
}
TodoList.propTypes = {
    todos: PropTypes.array,
}
