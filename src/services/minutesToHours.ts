export const minutesToHours = (minutes: number) => {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	if (hours === 0) {
		return `${remainingMinutes}m`;
	}

	return `${hours}h ${remainingMinutes}m`;
};
