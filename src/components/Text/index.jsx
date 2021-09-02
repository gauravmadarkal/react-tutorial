import React from 'react';

const Text = ({
	classes,
	children
}) => {
	return (
		<p className={`txt ${classes}`}>
			{children}
		</p>
	)
};

export default Text;