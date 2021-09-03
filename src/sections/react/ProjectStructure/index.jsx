import React from 'react';
import { proj_struc } from '../../../assets/constants';
import Points from '../../../components/Points';
import Text from '../../../components/Text';

const ProjectStructure = () => (
	<section>
		<h2 className='section-header'>Project Structure</h2>
		<Text classes='sub-heading'>Lets explore the files and folders that are created.</Text>
		<Points content={proj_struc} />
	</section>
);

export default ProjectStructure;