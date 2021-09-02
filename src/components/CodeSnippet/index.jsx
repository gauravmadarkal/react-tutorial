import React, { useState } from 'react';
import './style.css';

const CodeSnippet = ({
	code
}) => {
	const [copied, setCopied] = useState(false);
	return(<pre className='snippet'>
		{code}
		<div 
			className='copy'
			role='button'
			tabIndex={0}
			onClick={() => {
				navigator.clipboard.writeText(code);
				setCopied(true);
			}}
		>
			{copied ? 'copied' : 'copy'}
		</div>
	</pre>)
};

export default CodeSnippet;