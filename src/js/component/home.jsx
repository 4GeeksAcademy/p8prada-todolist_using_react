import React from "react";
import TodoContainer from "./todoContainer";


const Home = () => {
	return (
		<div className="text-center">
			<h1 className="title">todos</h1>
			<TodoContainer/>
		</div>
	)

	// const [userInput, setUserInput] = useState([]);
	// const [taskList, setTaskList] = useState([]);

	// const userInputHandler = (event) => {
	// 	const userInput = event.target.value;
	// 	console.log(userInput);
	// 	setUserInput(userInput);
	// }

	// const addTask = () => {
		
	// }

	// return (
	// 	<div>
	// 		<div className="title">
	// 			To-Do
	// 		</div>

	// 		<div className="toDoList">
	// 			<input onKeyUp={e => e.key === "Enter" && setTaskList((taskList) => {

	// 				return [...taskList, e.target.value]
	// 			})}/>
	// 		</div>

	// 		{taskList.map((task, index) => <p key={index}>{task}</p>)}
	// 	</div>
	// );
};

export default Home;
