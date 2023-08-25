/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react';
import { useTasksContext } from './tasks-context';

export interface TimerContext {
	timeLeft: number;
	progress: number;
	isRunning: boolean;
	setIsRunning: (val: boolean) => void;
	setTaskTime: (time: number) => void;
}

export const TimerContext = createContext<TimerContext | null>(null);

export default function TimerContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [seconds, setSeconds] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [taskTime, setTaskTime] = useState<number>(1);

	const { taskDoing, addDoneTask } = useTasksContext();

	const progress = (seconds / taskTime) * 100;
	const timeLeft = taskTime - seconds;

	useEffect(() => {
		if (taskDoing !== undefined) {
			setIsRunning(true);
			setSeconds(0);
			setTaskTime(taskDoing.duration * 60);
		}
	}, [taskDoing]);

	useEffect(() => {
		if (taskDoing && timeLeft <= 0) {
			setIsRunning(false);
			addDoneTask(taskDoing);
		}
	}, [timeLeft, addDoneTask, taskDoing]);

	useEffect(() => {
		if (isRunning) {
			const timer = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds + 1);
			}, 10);

			return () => clearInterval(timer);
		}
	}, [isRunning]);

	return (
		<TimerContext.Provider
			value={{ timeLeft, progress, setTaskTime, setIsRunning, isRunning }}
		>
			{children}
		</TimerContext.Provider>
	);
}

export function useTimerContext() {
	const context = useContext(TimerContext);

	if (!context) {
		throw new Error('useTimerContext must be used within a TimerContext');
	}
	return context;
}
