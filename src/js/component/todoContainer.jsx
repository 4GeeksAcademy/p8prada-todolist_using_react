import React, {useState} from "react";
import Todo, { NO_TODO_TEXT } from "./Todo.jsx";

export default function TodoContainer() {
    const [userInput, setUserInput] = useState("");
    const [taskList, setTaskList] = useState([]);

    const onChangeHandler = (e) => setUserInput(e.target.value);

    const removeTask = (key) => {

// DO THE SAME AS THE FILTER BELOW -----------------------------------------------

    //     const filteredTaskList = [];
    //     for (let index = 0; index < taskList.length; index++) {
    //         if (index !== key) {
    //             filteredTaskList.push(taskList[index]);
    //         }
    //     }
    //     setTaskList(filteredTaskList);
// -------------------------------------------------------------------------------
        setTaskList(taskList => taskList.filter((_, index) => key !== index))
    }

    const addTodoHandler = (e) => {
        if(e.key === 'Enter'){
            setTaskList([...taskList, userInput]);
            setUserInput("");
        }
    }

    const noTaskHandler = (arr) => {
        if(arr.length === 0){
            return (<Todo todo={NO_TODO_TEXT} />);
        }else{
            return taskList.map((todo,index) => <Todo key={index} index={index} todo={todo} remove={removeTask}/>);
        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                value={userInput}
                onChange={onChangeHandler}
                onKeyUp={addTodoHandler}
                />
            </form>
            {noTaskHandler(taskList)}
            <div className="paper">{taskList.length} Items left</div>
        </div>
        )
}

