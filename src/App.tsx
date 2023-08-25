import { useState } from 'react';
import './App.css';
import { DoingColumn } from './components/mainTable/DoingColumn';
import { DoneColumn } from './components/mainTable/DoneColumn';
import { Header } from './components/Header';
import { ToDoColumn } from './components/mainTable/ToDoColumn';
import { AddTask } from './components/AddTask';
import { useTasksContext } from './context/tasks-context';
import { Timer } from './components/Timer';
import { Footer } from './components/Footer';

function App() {
	const [addingTask, setAddingTask] = useState(false);

	const { taskDoing } = useTasksContext();

	return (
		<div className='app-container'>
			<AddTask setAddingTask={setAddingTask} addingTask={addingTask} />
			<Header />
			{taskDoing && <Timer />}
			<div className='table-content'>
				<ToDoColumn setAddingTask={setAddingTask} />
				<DoingColumn />
				<DoneColumn />
			</div>
			<Footer />
		</div>
	);
}

export default App;
