import { useState } from "react";
import styled from "styled-components";
import img from "../../assets/image/235-2355270_edit-data-icon-comments-pencil-ruler-vector-icon.png";

const Todo = () => {
	const [inputVisible, setInputVisible] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [todoList, setTodoList] = useState([]);

	const toggleInput = () => {
		setInputVisible(!inputVisible);
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleAddTodo = () => {
		if (inputValue.trim() !== "") {
			setTodoList([...todoList, inputValue]);
			setInputValue("");
			setInputVisible(false);
		}
	};

	return (
		<div>
			<div className="container">
				<Content>
					<button onClick={toggleInput}>
						<img src={img} alt="" />
					</button>
					{inputVisible && (
						<>
							<input
								type="text"
								value={inputValue}
								onChange={handleInputChange}
							/>
							<button onClick={handleAddTodo}>Add</button>
						</>
					)}
				</Content>
			</div>
			<div>
				{todoList.map((todo, index) => (
					<div key={index}>{todo}</div>
				))}
			</div>
		</div>
	);
};

export default Todo;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	button {
		width: 150px;
		height: 80px;
		border-radius: 10px;
		cursor: pointer;
		transition: 3s;
		img {
			width: 50px;
		}
		&:hover {
			background-color: blue;
		}
	}
`;
