import { Task, useTasksContext } from '../../context/tasks-context';
import { minutesToHours } from '../../services/minutesToHours';
import { BatteryFullIcon, CheckBadgeIcon, RefreshIcon } from '../icons';
import './DoneColumn.css';

export function DoneColumn() {
	const { addTask, clearDoneTask, tasksDone } = useTasksContext();

	const handleAddTask = (task: Task) => () => {
		addTask(task);
	};

	const handleClearDoneTasks = () => {
		clearDoneTask();
	};

	return (
		<div className='done-column'>
			<div
				className='title-table title-done'
				style={{
					borderBottom:
						tasksDone.length > 0 ? 'none' : '1px solid var(--white-color-text)',
					borderRadius:
						tasksDone.length > 0 ? '0 0.5rem 0 0' : '0 0.5rem 0.5rem 0',
				}}
			>
				<BatteryFullIcon className='battery-icon' />
				<h2>Done</h2>
				{/* agregar border-bottom y hr al agregar task */}
				{tasksDone.length > 0 && <hr />}
			</div>
			{tasksDone.map((task) => (
				<div key={task.id} className='done-task'>
					<div className='done-task-description'>
						<span className='task-name'>{task.name}</span>
						<div className='task-below-name'>
							<span className='done-task-duration'>
								{minutesToHours(task.duration)}
							</span>
							<div className='re-add-task' onClick={handleAddTask(task)}>
								<RefreshIcon />
							</div>
						</div>
					</div>
					<div className='check-done-task'>
						<CheckBadgeIcon />
					</div>
				</div>
			))}
			{tasksDone.length > 0 && (
				<div className='clear-done-task-button'>
					<span onClick={handleClearDoneTasks}>Clear done tasks</span>
				</div>
			)}
		</div>
	);
}
