import React from 'react';
import NextTutorial from '../../components/NextTutorial';
import IntegrationMongoose from '../../sections/node/IntegrationMongoose';

const NodeHome = () => {
	return (
		<section>
			<IntegrationMongoose />
			<NextTutorial back title='Mongodb Tutorial' to='/mongo' />
			<NextTutorial title='React Native Tutorial Coming soon' to='#' />
		</section>
	)
};

export default NodeHome;