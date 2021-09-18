
import React from 'react';
import { card_component, card_styling } from '../../../assets/constants/reactNative';
import BoldItalicize from '../../../components/BoldItalicize';
import CodeSnippet from '../../../components/CodeSnippet';
import Points from '../../../components/Points';
import Text from '../../../components/Text';

const BuildingScreens = () => {
	return (
		<section>
			<Text>Lets build the Home screen now, the Home screen is supposed to contain a list of tutorials a user has subscribed to</Text>
			<Text>So, lets think about the list of components we can build</Text>
			<Points content={[
				'A card: To show the tutorial name',
				'A Header'
			]} />
			<Text>We'll start with the card component</Text>
			<Text>The card component will consist of a tutorial name, type of tutorial, completion status</Text>
			<Text>We'll need some dummy data to get started with, copy the below object and paste it into a file called constants.js</Text>
			<Text>Let's keep that aside for now, create a folder called card inside the components directory. ./src/components/card/index.jsx</Text>
			<Text>In react native, there are mutliple types of UI elements, some of the major ones are:</Text>
			<Points content={
				[
					'View: This is similar to a div, it renders a part of the screen, it can be as small as a Dot and as big as an entire screen.',
					'Text: Corresponds to a text element',
					'Image: To render images, takes a source property similar to a img tag in html',
					{ 
						main: 'Touchables: They are the ones which respond to touch events, all these elements emit a onPress() event', 
						subpoints: [
							<Text><b>TouchableOpacity</b>: Gives a visible response on touch by reducing opactity of the view</Text>,
							<Text><b>TouchableWithoutFeedback</b>: Gives no visible feedback</Text>,
							<Text><b>TouchableHighlight</b>: Highlights the view with a border</Text>
						] 
					} 
				]
			} />
			<Text>Our card component will be a touchable element, because in the actual app, if we click on a tutorial we want to start the tutorial</Text>
			<Text>Look at the code below and try to understand what is hapenning</Text>
			<CodeSnippet code={card_component} />
			<Text>We have two text elements to show the title and completion status and an arrow image to give a notion that it is a clickable element</Text>
			<Text>Now lets style the component, you can see that we have already added some styling object, now lets create the style objects</Text>
			<Text>Go into the style.js for that component, paste the same starter code for a styling file</Text>
			<CodeSnippet code={card_styling} />
			<Text>You can see that the styling is very similar to css, some things that are different are:</Text>
			<Points content={[
				'You don\'t mention the units for a value, like px, pt, em or rem. Because each native platform has its own way to interpret the screen size. So we just give the value',
				'If you want a view to flex, instead of display: flex, we give flex: 1',
				'Margin, padding do not take all 4 sides, we need to give individual side values.',
				'All style attributes are camelCase'
			]} />
			
		</section>
	)
};

export default BuildingScreens;
