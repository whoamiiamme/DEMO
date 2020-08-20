import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav>
			<Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
				<div style={{ fontSize: '30px' }}> 🦠</div>
			</Link>
			<ul
				style={{
					listStyleType: 'none'
				}}
			>
				<Link
					style={{
						display: 'inline-block',
						color: 'white',
						textDecoration: 'none',
						marginTop: '10px',
						marginRight: '40px'
					}}
					to='/symptom'
				>
					<li>Symptom</li>
				</Link>
				<Link
					style={{
						display: 'inline-block',
						color: 'white',
						textDecoration: 'none',
						marginTop: '10px',
						marginRight: '40px'
					}}
					to='/graph'
				>
					<li>Graph</li>
				</Link>
				<Link
					style={{
						display: 'inline-block',
						color: 'white',
						textDecoration: 'none',
						marginTop: '10px',
						marginRight: '40px'
					}}
					to='/about'
				>
					<li>About</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
