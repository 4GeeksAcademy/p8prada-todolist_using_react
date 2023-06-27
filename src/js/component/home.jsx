import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [userInput, setUserInput] = useState([]);
	const [taskList, setTaskList] = useState([]);

	const userInputHandler = (event) => {
		const userInput = event.target.value;
		console.log(userInput);
		setUserInput(userInput);
	}

	const addTask = () => {
		
	}

	return (
		<div>
			<div className="title">
				To-Do
			</div>

			<div className="toDoList">
				<input onKeyUp={e => e.key === "Enter" && setTaskList((taskList) => {

					return [...taskList, e.target.value]
				})}/>
			</div>

			{taskList.map((task, index) => <p key={index}>{task}</p>)}
		</div>
	);
};

export default Home;
