import React, {useState} from 'react';

export const NO_TODO_TEXT = "No tasks..."

export default function Todo (props) {
    
    const {todo, remove, index} = props;

    const [showDelete, setShowDelete] = useState(false);
    const isNoTodoText = todo === NO_TODO_TEXT;


    return (
        <div className="toDo d-flex justify-content-between"
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
        >
            <p className='task'>{todo}</p>

            
            {(!isNoTodoText && showDelete) && (<p className='delete' onClick={() => remove(index)}>X</p>)}

        </div>
    )}