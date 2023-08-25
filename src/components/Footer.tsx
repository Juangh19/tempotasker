import './Footer.css';

export function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-author'>
				<span>
					Developed and designed by:{' '}
					<a href='https://github.com/Juangh19' target='_BLANK' rel='noopener'>
						Juangh19
					</a>
				</span>
			</div>
			<div className='footer-about'>
				<a
					href='https://github.com/Juangh19/tempotasker'
					target='_BLANK'
					rel='noopener'
				>
					How i made this project?
				</a>
			</div>
		</footer>
	);
}
