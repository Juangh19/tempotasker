import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TasksContextProvider from './context/tasks-context.tsx';
import TimerContextProvider from './context/timer-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<TasksContextProvider>
		<TimerContextProvider>
			<App />
		</TimerContextProvider>
	</TasksContextProvider>
);
