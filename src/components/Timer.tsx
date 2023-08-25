import { useTasksContext } from '../context/tasks-context';
import { useTimerContext } from '../context/timer-context';
import './Timer.css';
import { PauseIcon, PlayIcon, XMarkIcon } from './icons';

export function Timer() {
	const { timeLeft, progress, setIsRunning, isRunning } = useTimerContext();
	const { clearDoingTask } = useTasksContext();

	const hours = Math.floor(timeLeft / 3600);
	const minutes = Math.floor((timeLeft % 3600) / 60);
	const seconds = Math.floor((timeLeft % 3600) % 60);

	const handleSetIsRunning = (val: boolean) => {
		setIsRunning(val);
	};

	const handleClearDoingTask = () => {
		clearDoingTask();
	};

	return (
		<div className='timer'>
			<label
				className='label-timer-progress'
				style={{ '--p': progress } as React.CSSProperties}
			>
				<span className='timer-counter'>
					{hours < 10 ? `0${hours}` : hours}:
					{minutes < 10 ? `0${minutes}` : minutes}:
					{seconds < 10 ? `0${seconds}` : seconds}
				</span>
				<div className='timer-buttons'>
					{isRunning ? (
						<div
							className='timer-pause'
							onClick={() => handleSetIsRunning(false)}
						>
							<PauseIcon />
						</div>
					) : (
						<div
							className='timer-unpause'
							onClick={() => handleSetIsRunning(true)}
						>
							<PlayIcon className='play-timer-button' />
						</div>
					)}
					<div className='timer-exit' onClick={handleClearDoingTask}>
						<XMarkIcon className='timer-exit-icon' />
					</div>
				</div>
				<progress className='timer-progress' max='100' value='10'></progress>
			</label>
		</div>
	);
}
