import { BatteryEmptyIcon, PlayIcon, XMarkIcon } from '../icons';
import './ToDoColumn.css';
import '../../variables.css';
import { Task, useTasksContext } from '../../context/tasks-context';
import { minutesToHours } from '../../services/minutesToHours';
import { useTimerContext } from '../../context/timer-context';

interface Props {
	setAddingTask: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ToDoColumn({ setAddingTask }: Props) {
	const { removeTask, addDoingTask, clearDoingTask } = useTasksContext();
	const { setTaskTime, setIsRunning } = useTimerContext();

	const { tasksToDo } = useTasksContext();

	const handleRemoveTask = (task: Task) => () => {
		removeTask(task);
	};

	const handleAddDoingTask = (task: Task) => () => {
		clearDoingTask();
		addDoingTask(task);
		setTaskTime(task.duration * 60);
		setIsRunning(true);
	};

	const handleAddingTask = () => {
		setAddingTask(true);
	};

	return (
		<div className='todo-column'>
			<div className='title-table title-todo'>
				<BatteryEmptyIcon className='battery-icon' />
				<h2>To Do</h2>
				<hr />
			</div>
			{tasksToDo.map((task) => (
				<div key={task.id} className='todo-task'>
					<div className='task-description'>
						<span className='task-name'>{task.name}</span>
						<span className='task-duration'>
							{minutesToHours(task.duration)}
						</span>
					</div>
					<div className='task-buttons'>
						<div
							className='play-todo-button'
							onClick={handleAddDoingTask(task)}
						>
							<PlayIcon />
						</div>
						<div
							className='remove-todo-button'
							onClick={handleRemoveTask(task)}
						>
							<XMarkIcon />
						</div>
					</div>
				</div>
			))}
			<div className='add-task-button'>
				<span onClick={handleAddingTask}>Add a task!</span>
			</div>
		</div>
	);
}
