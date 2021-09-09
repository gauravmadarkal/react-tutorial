import React from 'react';
import './style.css';
import Arrow from '../../assets/icons/next.png';

const ScrollToTop = () => {
	return (
		<div className='scroller' role='button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
			<img src={Arrow} alt='Scroll to top' className='icon' />
		</div>
	)
};

export default ScrollToTop;