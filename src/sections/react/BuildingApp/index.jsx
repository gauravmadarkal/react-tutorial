import React from 'react';
import { 
	curly_braces, 
	pages_points, 
	routes_in_browser, 
	snippet_1, 
	snippet_2, 
	snippet_3, 
	snippet_4, 
	snippet_5, 
	snippet_6, 
	why_jsx 
} from '../../../assets/constants';
import BoldItalicize from '../../../components/BoldItalicize';
import CodeSnippet from '../../../components/CodeSnippet';
import Points from '../../../components/Points';
import Text from '../../../components/Text';
import PagesCreated from '../../../assets/images/pages_created.PNG';
import ComponentsExample from '../../../assets/images/components_example.PNG';
import Lifecycle from '../../../assets/images/lifecycle_components.PNG';

const BuildingApp = () => (
	<section>
		<h2 className='section-header'>Building the Application</h2>
		<Text>Lets look at the code already present in the src directory. 
		Head over to App.js, this is where the code is which is being rendered on your browser currently.
		Remove all the code that is being returned from the function App(). Just put it a Header tag saying "hello" and hit save, 
		you see that the browser automatically refreshes and you can see your chages there. This is called a live server.</Text>
		<h3>Routing</h3>
		<Text>As you all got a glipmse of the end result, there are two pages that we will be building today.</Text>
		<Points content={['Homepage or the landing page.', 'Contact me page.']} />
		<Text>Lets define a route to tell the app what page to render on what route.
Directly under the src directory, create a file called 'route_config.js'.</Text>
		<Text>Paste this code into the file. This code basically is what tells the different pages that are rendered in your application.</Text>
		<CodeSnippet code={snippet_1} />
		<Text>We'll get into what is routing in-detail in a bit.</Text>
		<Points content={pages_points} />
		<Text>
			{why_jsx}
		</Text>
		<Text>
		Ok, lets get back to the code.
		</Text>
		<Text>Once all the directories and files are created your project structure should look like this</Text>

		<img src={PagesCreated} className='image' alt='Routing Pages Created'/>
		<Text>Go into the index.jsx file in the two directories and paste the following code snippet.</Text>
		<CodeSnippet code={snippet_2} />
		<Text>Lets get back to these files later and explore why both of them have different code snippets but return the same html.</Text>
		<Text>Now, lets go back the <BoldItalicize>route_config.js</BoldItalicize> file.</Text>
		<Text>Here on top of the file paste the following import statements.</Text>
		<CodeSnippet code={snippet_3} />
		<Text>Basically, we just created the components that we had previously written in this file, 
			now we are importing those components to make it valid. 
			To verify if you imported the right one, just right click on the Home tag and click on 'go to definition', 
			if it takes you to the right file then your import statements are right.</Text>
		<Text>Now lets render these pages in our application. If you check the browser it should still say 'Hello!'. 
			If it says something else you are far ahead in this tutorial.</Text>
		<Text>Open the App.js file and import the constant that we created in the <BoldItalicize>route_config.js</BoldItalicize> file. Do not look at the code snippet, try to import it yourself.</Text>
		<CodeSnippet code={snippet_4} />
		<Text>Now you see, there is a difference in the import statements.{curly_braces}.</Text>
		<Text>Ok, now that we have imported the routes configuration, we need a package that can help us render the pages when a specific url is hit in the browser window.</Text>
		<Text>Open the terminal again, and type the following command.</Text>
		<CodeSnippet code='npm i react-router-dom' />
		<Text>
			Once the library is successfully installed, you can see that it is added to the package.json file. Let's import the router into our app. <br />
			Head over to App.js and paste the following code snippet.
		</Text>
		<CodeSnippet code={snippet_5} />
		<Text> What we are doing here is 
			basically creating a Router, which has a <BoldItalicize>Switch</BoldItalicize>, this is similar to having a switch case in our code, 
			based on the url case value it decides what route to be called. The <BoldItalicize>Route</BoldItalicize> mentions the case value and it respective return value. 
			The case value is the path (or the relative url path) and the return value is the component that was defined for that path in the routes config file.
		</Text>
		<Text>
			If you carefully look, we have mentioned a keyword called <BoldItalicize>exact</BoldItalicize> in <BoldItalicize>Route</BoldItalicize>, 
			this basically tells the router to render this route when the path is an exact match and not a regular expression match.
		</Text>
		<Text>
			Now, go ahead and head over to you browser and see the changes. You can try the following urls in the browser and see the contents changing.
		</Text>
		<CodeSnippet code={routes_in_browser} />
			
		If you were successfully able to reach to this point, congratulations to you!!!

		<Text>Take some time here and see how each of the files are related to each other and what is the role of every piece of code you just wrote.</Text>
		<h3>Components</h3>
		<Text>The very foundation of React and the reason why react is very popular is because of the concept of Components.</Text>
		<BoldItalicize>So, what is a component?</BoldItalicize>
		<Text>If you go with the english definition, it means</Text>
		<i>"A part or element of a larger whole"</i>
		<Text>
			And that is what it exactly means in a react application. A component is a small UI part of the whole web app that is being built. A component can be as small as a button, to as big as an entire page.
			A Component can be constructed by grouping together multiple smaller components.
		</Text>
		<Text>Look at the below image and see if you can list out a few components.</Text>
		<img src={ComponentsExample} alt='Group of components' />
		<Text>Components:</Text>
		<Points content={["Text Formatter", "Text Editor", "Options", "Date Selector", "Button", "Check box", "LinkText"]} />
		<Text>If you got any of these then you were right, if you could list more, even better.</Text>
		<Text>That is the basic definition of a component.</Text>

		<Text>Types of components.</Text>
		<Points content={['Functional Components', 'Class based Components' ]} />
		<Text>There are other kinds of components, but they are basically exentensions on these two basic kinds.</Text>
		<Text>Functional components are components written as javascript functions, the return value of a functional components is the UI that will be rendered.</Text>
		<Text>Class based components are components which extend the class React.Component A class based component has a render() function which tells what the component renders on the webpage.</Text>
		<h4>Lifecycle of a component</h4>
		<img src={Lifecycle} alt='Lifecycle of a Component' />
		<Text>A constructor is called when a component is first inserted into the DOM, a costructor basically initializes the state of the components.</Text>
		<Text><BoldItalicize>State:</BoldItalicize> The state of the component can be picturized as the properties that control the behaviour of the component. When ever the state changes something in the component will/might change.</Text>
		<Text>The <BoldItalicize>render</BoldItalicize> function is called to bring the UI onto the browser.</Text>
		<Text><BoldItalicize>componentDidMount()</BoldItalicize> is a function that is called when the component written is mounted to the DOM or in other words, when the UI is visible on the browser window.</Text>
		<Text><BoldItalicize>componentDidUpdate()</BoldItalicize> is a function that is called when the state changes (meaning some property of the component changed) which means the component has to re-render.</Text>
		<Text>These functions are used in a class based component. The lifecycle of a functional component remains the same except for a fact that the naming convention changes.</Text>
		<Text>In a functional component hooks maintain the lifecycle of that component intact.</Text>
		<Text>There are some important hooks that are covered in this tutorial</Text>
		<Points content={[ 'useState()', 'useEffect()' ]} />
		<Text> There are many more hooks which are out of the scope of this tutorial, but you can go through them from the react docs.</Text>
		<Text>useState hook help maintain (create, update) the state of the component. </Text>
		<Text>syntax: useState hook takes a initial value for a state property and returns an array of two objects, a getter and a setter for that state property.</Text>
		<Text>eg: const [name, setName] = useState('Dave');</Text>
		<Text>here name is the getter which will intially hold the value 'Dave', setName is the setter which is used to change the value.</Text>
		<Text>useEffect, as the name sounds, reflects on the sideeffects of the components. A componentDidMount is a sideEffect telling that the component just mounted, componentDidUpdate is a sideEffect of some state changing.</Text>

		<Text>syntax: useEffect takes two arguments, first is callback that should be executed when soemthing changes, second argument is the dependencies list (the change). An empty dependency list indicates that we want to execute the callback only once, that is when the component mounts.</Text>
		<Text>eg:</Text>

		<CodeSnippet code={snippet_6} />

		The useEffect which has a dependency argument, that is called whenever the state property 'name' changes its value.

		<Text>Ok, that is good enough to get you started on the building the application.</Text>
	</section>
);

export default BuildingApp;