import { Button } from "./components/UI/button/Button";
import Tasks3 from "./components/tasks3/Tasks3";
import Todo from "./components/todo/Todo";
// import styled from "styled-components";
const App = () => {
	return (
		<>
			<div>
				<div>
					<Button variants="ali1" variant="outlined">
						Add
					</Button>
					<Button variants="ali5" variant="Danger">
						Add
					</Button>
					<Button variants="ali3" variant="contained">
						Add
					</Button>
					<Button variants="ali4" variant="Warning">
						Add
					</Button>
				</div>
				<Tasks3 />
				<Todo />
			</div>
		</>
	);
};

export default App;
