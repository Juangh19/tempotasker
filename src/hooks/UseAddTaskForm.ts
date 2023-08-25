import { useState } from 'react';

export function useAddTaskForm() {
	const [inputName, setInputName] = useState<string>('');
	const [inputDuration, setInputDuration] = useState<number>(0);
	const [canSubmit, setCanSubmit] = useState<boolean>(false);

	if (inputName.length > 0 && inputDuration > 0 && !canSubmit) {
		setCanSubmit(true);
	} else if ((inputName.length === 0 || inputDuration === 0) && canSubmit) {
		setCanSubmit(false);
	}

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (value.length >= 20) {
			return;
		}
		setInputName(value);
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (Number(value) > 1440) {
			return;
		}
		setInputDuration(Number(value));
	};

	return {
		inputName,
		setInputName,
		inputDuration,
		setInputDuration,
		canSubmit,
		handleNameChange,
		handleInputChange,
	};
}
