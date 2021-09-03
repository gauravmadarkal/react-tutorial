import React from 'react';

const BoldItalicize = ({
	classes,
	children
}) => (
	<b>
		<i className={classes}>{children}</i>
	</b>
);

export default BoldItalicize;