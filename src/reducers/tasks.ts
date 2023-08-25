/* eslint-disable no-case-declarations */
import { Task } from '../context/tasks-context';

export enum TaskActionsTypes {
	ADD_TODO_TASK = 'ADD_TASK',
	REMOVE_TASK = 'REMOVE_TASK',
	ADD_DOING_TASK = 'ADD_DOING_TASK',
	CLEAR_DOING_TASK = 'CLEAR_DOING_TASK',
	ADD_DONE_TASK = 'ADD_DONE_TASK',
	CLEAR_DONE_TASK = 'CLEAR_DONE_TASK',
}

type TaskAction =
	| { type: TaskActionsTypes.ADD_DONE_TASK; payload: Task }
	| { type: TaskActionsTypes.ADD_TODO_TASK; payload: Task }
	| { type: TaskActionsTypes.REMOVE_TASK; payload: Task }
	| { type: TaskActionsTypes.CLEAR_DOING_TASK }
	| { type: TaskActionsTypes.CLEAR_DONE_TASK }
	| { type: TaskActionsTypes.ADD_DOING_TASK; payload: Task };

const storedTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

export const initialTasksState: Task[] = storedTasks;

export const tasksReducer = (state: Task[], action: TaskAction): Task[] => {
	switch (action.type) {
		case TaskActionsTypes.ADD_TODO_TASK:
			const taskExists = state.find((task) => task.id === action.payload.id);
			if (taskExists) {
				return state.map((task) =>
					task.id === action.payload.id ? { ...task, status: 'todo' } : task
				);
			}
			return [...state, action.payload];
		case TaskActionsTypes.REMOVE_TASK:
			return state.filter((task) => task.id !== action.payload.id);
		case TaskActionsTypes.ADD_DOING_TASK:
			return state.map((task) =>
				task.id === action.payload.id ? { ...task, status: 'doing' } : task
			);
		case TaskActionsTypes.CLEAR_DOING_TASK:
			return state.filter((task) => task.status !== 'doing');
		case TaskActionsTypes.ADD_DONE_TASK:
			return state.map((task) =>
				task.id === action.payload.id ? { ...task, status: 'done' } : task
			);
		case TaskActionsTypes.CLEAR_DONE_TASK:
			return state.filter((task) => task.status !== 'done');
		default:
			return state;
	}
};
