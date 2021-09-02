export const snippet_1 = `
export const routes = [
    {
        name: 'Home',
        component: <Home />,
        path: ['/', '/home']
    },
    {
        name: 'Contact Me',
        component: <Contact />,
        path: '/contact'
    },
];
`

export const snippet_2 = `
-------------------------
/src/pages/home/index.jsx
-------------------------

import React from 'react';
import './style.css';

const Home = () => {

	return (
		<div className='container'>
			<h1>This is home page</h1>
		</div>
	)
};

export default Home;

-------------------------
/src/pages/contact/index.jsx
-------------------------

import React from 'react';
import './style.css';

class Contact extends React.Component {

	render() {
		return (
			<div className='container'>
				<h1>This is contact me page</h1>
			</div>
		)
	};
};

export default Contact;`

export const snippet_3 = `
import Home from './pages/home';
import Contact from './pages/contact';
`
export const snippet_4 = `
import { routes } from './route_config';
`

export const snippet_5 = `
import React from 'react';
import './style.css';

const Input = ({
	label,
	placeholder,
	onChange,
	value,
	multiline,
	classes
}) => (
	<div className='inp-wrp'>
		{label && 
			<label className='inp-lb'>
				{label}
			</label>
		}
		{!multiline ? 
			<input value={value} placeholder={placeholder} onChange={onChange} className={\`\${classes} inp\`} />
			:
			<textarea value={value} placeholder={placeholder} onChange={onChange} className={\`\${classes} inp\`} />
		}
	</div>
);

export default Input;
`;

export const npm_npx_dets = [
	`npx - is a package runner tool which installs and runs the package. 
	Here, it will install a tool call create-react-app (in short, CRA), 
	and runs the CRA to create an app based on what ever name you've mentioned`,
	`npm - we have not used npm so far, but npm is a package manager, 
	it only installs a package and records all the packages installed in your app into a single file names 'package.json'.`
];

export const proj_struc = [
	`node_modules: This is a directory which has all the dependencies or 
	libraries required for your application to run. When you expand the directory you might find numerous dependencies, 
	most of these dependencies are added by CRA, as and when you add new libraries to your project they will appear in this directory.`,
	`public: As the name sounds, the files in this directory are the only ones that are made public, and can be directly accessed from your website URL.`,
	{
		main: 'package.json: A very important file, this files has information about your project.',
		subpoints: [
			`project name`,
			`version`,
			`A dependencies object: It contains entries of each library and the exact version`,
			`scripts: all the commands that are required by your project`,
				`1. start: to start your project on the environment it is currently present.`,
				`2. build: to build a production ready application. When you host your project, you will not be hosting your src or public directory. You will create a production build which will have the most optimized version of your project in a "build" folder.`,
				`3. test: To run unit tests written in your project.`,
				`4. eject: This is beyond the scope of this tutorial. This command is used to get access to all the under-the-hood operations handled by CRA. If you want to modify something that is built into the library you need to eject the app. I recommend you to not run this command until you read about its consequences thoroughly.`,
		]
	},
	`src: This is the main directory which will have all your applications code.`
];

export const pages_points = [
	`Under the src directory, create a sub directory called 'pages'. This is where we will have all the pages used in our application`,
	`Under pages directory, create two sub directories called 'home' and 'contact'`,
	`Under each of the sub directories home and contact, create the following files. 'index.jsx' and 'style.css'`,
	`All the html and javascript will go into the index.jsx and the styling will go into the style.css file.`,
	`You might have a question as to why we are using jsx extension and not js. `,
	`JS - is a standard age old javascript file.`,
	`JSX - is a javascript file embedded with parts of HTML code`
];

export const why_jsx = `
When you create a pure html page you need to add all the parent tags, like the <html> <head> <title> etc.. But a JSX file returns only a small part of UI, like a page container, a button, a link tag etc..`

export const curly_braces = `If a file does not have a default export then it needs a { object_name } in the import statement, otherwise you can directly import the object`