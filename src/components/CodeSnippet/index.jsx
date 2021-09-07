import React, { useEffect, useState } from 'react';
import './style.css';

const CodeSnippet = ({
	code,
	hideButton
}) => {
	const [copied, setCopied] = useState(false);
	const [hideFull, setHideFull] = useState(false);

	useEffect(() => {
		if (code && code.length >= 50) {
			setHideFull(true);
		}
	}, [code]);

	const getPartialContent = (data) => {
		return (data.substr(0, 50) + '...');
	};

	return(
	<div className='code_wrapper'>
		<pre className='snippet'>
			{(hideFull && !hideButton) ? getPartialContent(code) : code}
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
		</pre>
		{hideFull && !hideButton && <div className='viewMore' role='button' tabIndex={0} onClick={() => setHideFull(false)}>View More</div>}
	</div>)
};

export default CodeSnippet;