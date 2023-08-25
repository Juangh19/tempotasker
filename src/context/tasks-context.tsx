/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from 'react';
import {
	TaskActionsTypes,
	initialTasksState,
	tasksReducer,
} from '../reducers/tasks';

export interface Task {
	id: string;
	name: string;
	duration: number;
	status: 'todo' | 'doing' | 'done';
}

type TasksContext = {
	tasksToDo: Task[];
	taskDoing: Task | undefined;
	tasksDone: Task[];
	addTask: (task: Task) => void;
	removeTask: (task: Task) => void;
	addDoingTask: (task: Task) => void;
	clearDoingTask: () => void;
	addDoneTask: (task: Task) => void;
	clearDoneTask: () => void;
};

function useTasksReducer() {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasksState);

	const addTask = (task: Task) => {
		dispatch({ type: TaskActionsTypes.ADD_TODO_TASK, payload: task });
	};

	const removeTask = (task: Task) => {
		dispatch({ type: TaskActionsTypes.REMOVE_TASK, payload: task });
	};

	const addDoingTask = (task: Task) => {
		dispatch({ type: TaskActionsTypes.ADD_DOING_TASK, payload: task });
	};

	const clearDoingTask = () => {
		dispatch({ type: TaskActionsTypes.CLEAR_DOING_TASK });
	};

	const addDoneTask = (task: Task) => {
		dispatch({ type: TaskActionsTypes.ADD_DONE_TASK, payload: task });
	};

	const clearDoneTask = () => {
		dispatch({ type: TaskActionsTypes.CLEAR_DONE_TASK });
	};

	return {
		tasks,
		addTask,
		removeTask,
		addDoingTask,
		clearDoingTask,
		addDoneTask,
		clearDoneTask,
	};
}
export const TasksContext = createContext<TasksContext | null>(null);

type TasksContextProviderProps = {
	children: React.ReactNode;
};

export default function TasksContextProvider({
	children,
}: TasksContextProviderProps) {
	const {
		tasks,
		addTask,
		removeTask,
		addDoingTask,
		clearDoingTask,
		addDoneTask,
		clearDoneTask,
	} = useTasksReducer();

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const tasksToDo = tasks.filter((task) => task.status === 'todo');
	const taskDoing = tasks.find((task) => task.status === 'doing');
	const tasksDone = tasks.filter((task) => task.status === 'done');

	return (
		<TasksContext.Provider
			value={{
				tasksToDo,
				taskDoing,
				tasksDone,
				addTask,
				removeTask,
				addDoingTask,
				clearDoingTask,
				addDoneTask,
				clearDoneTask,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
}

export function useTasksContext() {
	const context = useContext(TasksContext);

	if (!context) {
		throw new Error('useTasksContext must be used within a TasksContext');
	}

	return context;
}
