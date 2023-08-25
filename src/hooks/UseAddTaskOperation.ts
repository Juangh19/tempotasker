export enum OperationType {
	Increment = 'increment',
	Decrement = 'decrement',
}

interface OperationProps {
	inputDuration: number | null;
	setInputDuration: React.Dispatch<React.SetStateAction<number>>;
}

export function useAddTaskOperation({
	inputDuration,
	setInputDuration,
}: OperationProps) {
	const handleOperation = (operation: OperationType) => {
		if (operation === OperationType.Decrement) {
			if (inputDuration === null) return;
			const newDuration = inputDuration - 1;
			if (newDuration < 0) {
				return;
			}
			setInputDuration(newDuration);
		} else if (operation === OperationType.Increment) {
			if (inputDuration === null) return setInputDuration(1);

			const newDuration = inputDuration + 1;
			if (newDuration > 1440) {
				return;
			}
			setInputDuration(newDuration);
		}
	};
	return { handleOperation };
}
