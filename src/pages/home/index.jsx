import React from 'react';
import { curly_braces, npm_npx_dets, pages_points, proj_struc, snippet_1, snippet_2, snippet_3, snippet_4, why_jsx } from '../../assets/constants';
import CodeSnippet from '../../components/CodeSnippet';
import Points from '../../components/Points';
import Text from '../../components/Text';
import PagesCreated from '../../assets/images/pages_created.PNG';
import './style.css';

const Home = () => {
	return (
		<section>
			<h1 class="txt-cen">Tutorial on React</h1>
			<h2>What is react?</h2>
			<p class="txt">React is a javascript library to build UI.</p>

			<h2>Advantages of using React</h2>
			<ul>
				<li>You can divide your web app into teeny tiny reusable components.</li>
				<li>Each component has its own state. So, if something fails you don't to scan through your entire app to find the defect.</li>
				<li>Since its just a library and not a framework, it does not need any prior syntactical knowledge.</li>
			</ul>
			<p>You might have not heard of couple of terms used above, worry not, we will go over all these concepts in the next steps.</p>
			<p>Ok, that enough theory, lets jump into the code.</p>

			<section>
				<h2 class="section-header">Environment Setup</h2>
				<Text>Things needed to get started with react.</Text>
				<Points content={['Node runtime (https://nodejs.org/en/download/)', 'VS Code (IDE for writing code).']} />
				<Text>Once you are done installing both these tools, head over to the command line and run the following commands.</Text>
				<CodeSnippet code='npx create-react-app personal-website' />
				<Text>Replace the name 'personal-website' with whatever name you want to give to your application.</Text>
				<Text>While the commands takes time to complete, lets see what it says.</Text>
				<Points content={npm_npx_dets} />
				<Text>Your command should have exited by now, if not, then just wait for a few minutes.</Text>
				<Text>Open the directory created with the name of your project, in this case 'personal-website'.</Text>
				<Text>Launch VS Code and click on File - Open Folder (Select the react app folder that just got created).</Text>
				<Text>Now there are a bunch of files here magically already created.</Text>
				<Text>This is what CRA has done, it has provided a boiler plate code which will let you get started with developing your own application.</Text>
				<Text>If you do not see a terminal open in VS code, then head over to the top menu, click on 'Terminal' and 'New Terminal'.</Text>
				In the terminal type
				<CodeSnippet code='npm start' />
				<Text>
				Wait for the command to run and it will open the browser window with your new react app.
				That's all the setup you need to get a react app up and running.
				</Text>
			</section>
			<section>
				<h2 className='section-header'>Project Structure</h2>
				<Text classes='sub-heading'>Lets explore the files and folders that are created.</Text>
				<Points content={proj_struc} />
			</section>
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
				<Text>Now, lets go back the <i><b>route_config.js</b></i> file.</Text>
				<Text>Here on top of the file paste the following import statements.</Text>
				<CodeSnippet code={snippet_3} />
				<Text>Basically, we just created the components that we had previously written in this file, 
					now we are importing those components to make it valid. 
					To verify if you imported the right one, just right click on the Home tag and click on 'go to definition', 
					if it takes you to the right file then your import statements are right.</Text>
				<Text>Now lets render these pages in our application. If you check the browser it should still say 'Hello!'. 
					If it says something else you are far ahead in this tutorial.</Text>
				<Text>Open the App.js file and import the constant that we created in the <i><b>route_config.js</b></i> file. Do not look at the code snippet, try to import it yourself.</Text>
				<CodeSnippet code={snippet_4} />
				<Text>Now you see, there is a difference in the import statements.{curly_braces}.</Text>
				<Text>Ok, now that we have imported the routes configuration, we need a package that can help us render the pages when a specific url is hit in the browser window.</Text>
				<Text>Open the terminal again, and type the following command.</Text>
				<CodeSnippet code='npm i react-router-dom' />
				
			</section>
		</section>
	);
};

export default Home;