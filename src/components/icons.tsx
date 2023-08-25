export const BatteryEmptyIcon = ({ className }: batteryProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='2rem'
		viewBox='0 0 24 24'
		fill='currentColor'
		className={`w-6 h-6 ${className}`}
	>
		<path
			fillRule='evenodd'
			d='M.75 9.75a3 3 0 013-3h15a3 3 0 013 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6zm19.5 0a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-6z'
			clipRule='evenodd'
		/>
	</svg>
);

export const BatteryHalfIcon = ({ className }: batteryProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='2rem'
		viewBox='0 0 24 24'
		fill='currentColor'
		className={`w-6 h-6 ${className}`}
	>
		<path d='M4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0012 15v-4.5a.75.75 0 00-.75-.75H4.5z' />
		<path
			fillRule='evenodd'
			d='M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z'
			clipRule='evenodd'
		/>
	</svg>
);

type batteryProps = {
	className?: string;
};

export const BatteryFullIcon = ({ className }: batteryProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='2rem'
		viewBox='0 0 24 24'
		fill='currentColor'
		className={`w-6 h-6 ${className}`}
	>
		<path
			fillRule='evenodd'
			d='M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15zM4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H4.5z'
			clipRule='evenodd'
		/>
	</svg>
);

export const CheckBadgeIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='currentColor'
		className='w-6 h-6'
		width='2.25rem'
	>
		<path
			fillRule='evenodd'
			d='M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
			clipRule='evenodd'
		/>
	</svg>
);

export const RefreshIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		width='1.5rem'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-6 h-6'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
		/>
	</svg>
);

export const PauseIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		width='2rem'
		stroke='currentColor'
		className='w-6 h-6'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M15.75 5.25v13.5m-7.5-13.5v13.5'
		/>
	</svg>
);

type PlayIconProps = {
	className?: string;
};

export const PlayIcon = ({ className }: PlayIconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='1.5rem'
		fill='currentColor'
		className={`w-6 h-6 ${className}`}
	>
		<path
			fillRule='evenodd'
			d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
			clipRule='evenodd'
		/>
	</svg>
);

type XMarkIconProps = {
	className?: string;
};

export const XMarkIcon = ({ className }: XMarkIconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='1.5rem'
		fill='currentColor'
		className={`w-6 h-6 ${className}`}
	>
		<path
			fillRule='evenodd'
			d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
			clipRule='evenodd'
		/>
	</svg>
);

export const ChevronUpIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-6 h-6'
		height='1.125rem'
		width='1.125rem'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M4.5 15.75l7.5-7.5 7.5 7.5'
		/>
	</svg>
);

export const ChevronDownIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1.125rem'
		height='1.125rem'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-6 h-6'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M19.5 8.25l-7.5 7.5-7.5-7.5'
		/>
	</svg>
);
