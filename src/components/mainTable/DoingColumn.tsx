import { BatteryHalfIcon } from '../icons';
import './DoingColumn.css';
import { useTasksContext } from '../../context/tasks-context';
import { useTimerContext } from '../../context/timer-context';

export function DoingColumn() {
	const { progress } = useTimerContext();
	const { taskDoing } = useTasksContext();

	return (
		<div className='doing-column'>
			<div
				className='title-table title-doing'
				style={{
					borderBottom: taskDoing
						? 'none'
						: '1px solid var(--white-color-text)',
				}}
			>
				<BatteryHalfIcon className='battery-icon' />
				<h2>Doing</h2>
				{/* agregar border-bottom y hr al agregar task */}
				{taskDoing && <hr />}
			</div>
			{taskDoing && (
				<div className='doing-task'>
					<span className='doing-task-name'>{taskDoing.name}</span>
					<progress
						className='progress-bar'
						value={progress}
						max='100'
					></progress>
				</div>
			)}
		</div>
	);
}
