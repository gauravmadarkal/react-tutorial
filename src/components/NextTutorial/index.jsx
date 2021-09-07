import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Next from '../../assets/icons/next.png';

const NextTutorial = ({
	title,
	to,
	back
}) => (
	<Link to={to} className={`next_tutorial ${back ? 'back' : ''}`}>
		<img src={Next} alt='Next Tutorial' className={`next ${back ? 'rota': ''}`}/>{back ? 'Back to' : 'Next Tutorial'}: {title}
	</Link>
);

export default NextTutorial;