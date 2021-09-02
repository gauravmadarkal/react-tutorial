import React from 'react';

const Points = ({
	content
}) => {
	return (
		<ul>
			{content.map(point => (
				<li>
					{point.subpoints ? point.main : point}
					{point.subpoints && 
						<ul>
							{point.subpoints.map(subpoint => (
								<li>{subpoint}</li>
							))}
						</ul>
					}
				</li>
			))}
		</ul>
	)
};

export default Points;