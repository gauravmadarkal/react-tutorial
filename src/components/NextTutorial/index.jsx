import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Next from '../../assets/icons/next.png';

const NextTutorial = ({
	title,
	to
}) => (
	<Link to={to} className='next_tutorial'>
		<img src={Next} alt='Next Tutorial' className='next'/>Next Tutorial: {title}
	</Link>
);

export default NextTutorial;