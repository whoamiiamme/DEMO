import React from 'react';

function About(props) {
	return (
		<div
			style={{
				backgroundColor: 'white',
				textAlign: 'center'
			}}
		>
			<br />
			<h2>About</h2>

			<br />
			<div
				style={{
					padding: '20px',
					backgroundColor: 'grey',
					color: 'white',
					margin: '20px',
					borderRadius: '20px'
				}}
			>
				<div style={{ fontSize: '20px' }}>Created by Tran Hong Chi Khang.</div>
				<br />
				<h4>How to connect?</h4>
				<div style={{ fontSize: '20px' }}>
					You can connect me via linkedIn{' '}
					<a href='https://www.linkedin.com/in/tran-khang-964b2a140/' target='_blank'>
						here
					</a>
					.
				</div>
			</div>
			<br />
		</div>
	);
}

export default About;
