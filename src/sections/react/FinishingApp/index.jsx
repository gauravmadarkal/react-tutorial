import React from 'react';
import { concepts_of_contact, snippet_10, snippet_11, snippet_12, snippet_13, snippet_14, snippet_15, snippet_16, snippet_7, snippet_8, snippet_9 } from '../../../assets/constants';
import BoldItalicize from '../../../components/BoldItalicize';
import CodeSnippet from '../../../components/CodeSnippet';
import Points from '../../../components/Points';
import Text from '../../../components/Text';

const FinishingApp = () => (
	<section>
		<Text>Lets start with building the home page. As you saw from the preview of the website, we will need couple of components for the home page.</Text>
		<Text>Copy the following starter code to get yourself setup for home page.</Text>
		<BoldItalicize>Some root level css</BoldItalicize>
		<CodeSnippet code={snippet_7} />
		<BoldItalicize>Button Component (src/components/common/button/index.jsx) </BoldItalicize>
		<CodeSnippet code={snippet_8} />
		<BoldItalicize>Button css (src/components/common/button/style.css)</BoldItalicize>
		<CodeSnippet code={snippet_9} />
		<BoldItalicize>Home page (src/pages/home/index.jsx)</BoldItalicize>
		<CodeSnippet code={snippet_10} />
		<BoldItalicize>Home page (src/pages/home/style.css)</BoldItalicize>
		<CodeSnippet code={snippet_11} />
		<Text>We have created some components and put them under respective folders.<br />
			<BoldItalicize>Button</BoldItalicize> is a common component and we have added it under the common folder and <BoldItalicize>Row, Col</BoldItalicize> are more of layout design specific components and we have added them under layout components, <br />
			Why dont you try and add code to these two layout, they are very simple components (Hint: All you have to do for Row is, arrange the children under Row in the horizontal plain)<br />
			Similarly you can add any number of categories of your choice which makes it easier to navigate and cleaner code.</Text>
		<Text>Once you have these files setup, just take a minute and look over all the files you just copied. Its just a bunch of html and css. Feel free to style it anyway you want and add a Hero image of your choice.</Text>
		<Text>Now lets see how to use state management to hold a value.</Text>
		<Text>Head over to <BoldItalicize>/home/index.jsx</BoldItalicize></Text>
		<Text>lets add a state variable which will hold a boolean value.</Text>

		<CodeSnippet code={snippet_16} />

		<Text>All we are doing here is, 
		Initially the subscribed value is false, indicating the user has not subscribed to the blog.</Text>
		<Text>if the user has clicked on subscribe button, we change the state value to true, making the component re-render and the UI to change. The button gets hidden and the text changes.</Text>
		<Text>There are several things to observe here, if you see the button component there are several incoming variables like the type, clickHandler etc.. </Text>
		<Text>These are called the props of a component. You can add such props to change the behaviour of your component and make it as generic as possible. </Text>
		<Text>This is some what similar to inversion of control (You build something basic and let the caller add any more modifications as needed).</Text>
		<Text>Thats great. We learned many things soo far. Take couple of minutes and recap what has been taught till now.</Text>

		<Text>Lets head over to the contact page and look at few more concepts</Text>

		<Text>lets create a component to take text <BoldItalicize>Input</BoldItalicize>.</Text>

		<BoldItalicize>src/components/common/input/index.jsx</BoldItalicize>
		<CodeSnippet code={snippet_12} />
		<BoldItalicize>src/components/common/input/style.css</BoldItalicize>
		<CodeSnippet code={snippet_13} />

		<Text>We'll use this component to create a form in our contact page <br />
		Paste the following contact form that is created below.</Text>

		<BoldItalicize>src/components/pages/contact/index.jsx</BoldItalicize>
		<CodeSnippet code={snippet_14} />
		<BoldItalicize>src/components/pages/contact/style.css</BoldItalicize>
		<CodeSnippet code={snippet_15} />

		<Text>Lets see what are the new concepts we introduced in this page.</Text>
		<Points content={[
			"The state implementation is different compared to functional components.",
			"binding functions to this.",
			"componentDidMount",
			"setTimeout",
			"... spread operator"
		]} />


		<Text>state implementation in class based components is linked to the 'this' object of the class. You need to initialize the value of the state in the constructor.</Text>
		<Text>You can access the state using this.state.variable_name.</Text>
		<Text>In order to set a value, you need to call this.setState function which will take a new state object</Text>

		<Text><BoldItalicize>Binding functions to this</BoldItalicize>: In order to get access to the state in a different function, you need to bind the function to this object which makes the function a part of the class.</Text>

		<Text><BoldItalicize>componentDidMount</BoldItalicize>: We use componentDidMount to make API calls or connect to a web socket or side some UI elements etc...</Text>

		<Text><BoldItalicize>setTimeout</BoldItalicize>: this is a asynchronous function which executes a callback when a specified time duration has passed.</Text>
		<Text>In this scenario we are using it to show or simulate a API call, which gets data from a server.</Text>

		<Text>spread operator is a very useful concept, it is use to modify child objects and create a copy of the modifying object. 
			If you are not familiar with this concept please make sure to read through it.</Text>

		<Text>Lets look at how these concepts are used in our Form.</Text>

		<Points content={concepts_of_contact} />

		<Text>This covers some major concepts of React. There are many more concepts which can found in the react docs. 
			Please start by building your own application, you will definitely come across many new interesting features.</Text>

		<Text>We have so far seen how great react is. But there are some downsides of using CRA, major one is react is completely rendered with javascript.</Text>
		<Text>Meaning:</Text>
		<Points content={
			[
				'If you view the page source of your react app, only thing that you can see is the index.html from the public directory.',
				'This is a problem because the search engines will be able to find your app based on the content your app serves to the engine to crawl through.',
				'Since react is completely rendered on the client side (browser) when the URL is hit in the browser search engines will not wait for the javascript to get downloaded (Google is improving its ability, but most others cannot index content rendered with  JS)'	
			]
		} />
		<Text><b>There are multiple solutions to this problem.</b></Text>
		<Points content={[
			'Using libraries like React snap - which generate static html from your react app.',
			'Gatsby - which is great to build static apps with react.'
		]} />
		<h1 className='txt-cen'>That concludes this tutorial on React</h1>
	</section>
);

export default FinishingApp;