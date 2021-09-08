/* eslint-disable no-useless-escape */

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
import './App.css';
import { routes } from './route_config';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				{routes.map(({ component, path }) => (
					<Route path={path} exact>
						{component}
					</Route>
				))}
			</Switch>
		</Router>
	);
}

export default App;`

export const snippet_6 = `
useEffect(() => {
	// do something when component mounts.
}, []);

useEffect(() => {
	if (name === 'Harry') {
		// do something else
	}
}, [name]);
`
export const snippet_7 =
`:root {
	--bg-color: #263238;
	--primary-color: #eceff1;
	--content-margin: 100em;
}
html {
	font-family: sans-serif;
}

body {
	background-color: var(--bg-color);
	padding: 4em;
	max-width: var(--content-margin);
	color: var(--primary-color);
	margin: 0 auto;
}`;


// src/components/common/button/index.jsx
export const snippet_8 =
`import React from 'react';
import './style.css';

const Button = ({
	type,
	fill,
	content,
	clickHandler,
	children
}) => {
	return (<button className={\`button \${type}\`} style={fill ? { backgroundColor: fill} : ''} clickHandler={clickHandler}>
		{content || children}
	</button>)
};

export default Button;`;

// src/components/common/button/style.css
export const snippet_9 =
`.button {
	padding: 1em;
	border-radius: 0.5em;
	display: block;
	border: none;
	text-decoration: none;
	width: max-content;
}

.button:hover {
	opacity: 0.5;
}

.primary {
	background-color: var(--primary-color);
	color: var(--bg-color);
}`;

// src/pages/home/index.jsx
export const snippet_10 =
`import React, { useState } from 'react';
import './style.css';
import Row from '../../components/layout/Row';
import Col from '../../components/layout/Col';
import Button from '../../components/common/button';
import Hero from '../../assets/images/developer.svg';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='container'>
			<Row>
				<Col classes='wd-60'>
					<h1 className='title'>Hi, I'm Jacob</h1>
					<p className='desc'>I'm a Software Developer, Freelancer and a Product designer based out of Boulder, Colorado</p>
					<Button type='primary' fill='#eceff1'>
						<Link to='/contact' className='link'>Contact Me</Link>
					</Button>
				</Col>
				<Col classes='wd-40'>
					<img src={Hero} className='hero' alt='Jacob\`s profile' />
				</Col>
			</Row>
		</div>
	)
};

export default Home;`;

// src/pages/home/style.css

export const snippet_11 =
`.title {
	font-size: 4em;
	margin-top: 20%;
}

.desc {
	font-size: 2em;
	font-weight: 100;
}

.link {
	text-decoration: none;
	color: var(--bg-color);
	font-size: 2em;
	font-weight: bold;
	padding: 1em;
}

.wd-60 {
	width: 60%;
}
.wd-40 {
	width: 40%;
}

.hero {
	width: 50em;
	height: 50em;
	max-width: 100%;
}`;

// input.jsx
export const snippet_12 = `
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

export const snippet_13 =
`.inp-wrp {
	display: flex;
	flex-direction: column;
}
.inp-lb {
	font-size: 1.2em;
	text-transform: capitalize;
	color: var(--bg-color);
	font-weight: bold;
	margin: 0.7em 0;
}
.inp {
	padding: 1em;
	border: 1px solid var(--bg-color);
	border-radius: 0.5em;
}`;

// contact.jsx
export const snippet_14 =
`import React from 'react';
import './style.css';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import Row from '../../components/layout/Row';
import Col from '../../components/layout/Col';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mail: '',
			message: ''
		}
	}

	componentDidMount() {
		// simulating a API call to the backend and fetching the data
		setTimeout(() => {
			this.setState({
				data: {
					email: 'jacob123@colorado.edu',
					addr: '30th and Folsom st, Boulder, CO'
				}
			})
		}, 2000);
	}

	handleSubmit() {
		// you can make a POST call and save the data on your database
		console.log(this.state.name, this.state.mail, this.state.message)
	}

	render() {
		return (
			<div className='ct-c'>
				<h1 className='text'>Send me a message</h1>
				<Input 
					label='Name' 
					placeholder='Enter your name here' 
					onChange={(e) => this.setState({
						...this.state, name: e.target.value
					})}
					value={this.state.name}
				/>
				<Input 
					label='Email Address' 
					placeholder='Enter your email here' 
					onChange={(e) => this.setState({
						...this.state, mail: e.target.value
					})}
					value={this.state.mail}
				/>
				<Input 
					label='Message' 
					placeholder='Enter your message here' 
					onChange={(e) => this.setState({
						...this.state, message: e.target.value
					})}
					value={this.state.message}
					multiline
				/>
				<Button content='Submit' clickHandler={this.handleSubmit} type='secondary' classes='submit' />
				<p className='heading txt-cen'>OR</p>
				{this.state.data && <Row>
					<Col classes='col-md'>
						<span className='heading'>Write to me</span>
						<span>{this.state.data.email}</span>
					</Col>
					<Col classes='col-md'>
						<span className='heading end'>Office Address</span>
						<span className='end'>{this.state.data.addr}</span>
					</Col>
				</Row>}
			</div>
		)
	};
};

export default Contact;`

export const snippet_15 =
`.ct-c {
	max-width: 50em;
	margin: 0 auto;
	background-color: white;
	border-radius: 0.1em;
	padding: 2em;
}
.text {
	color: var(--bg-color);
}

.submit {
	margin: 1em 0;
}

.col-md {
	width: 50%;
	justify-content: center;
}

p, span {
	color: var(--bg-color);
}
.heading {
	font-size: 1.2em;
	font-weight: bold;
}
.end {
	text-align: end;
}`;

export const snippet_16 = 
`
const [subscribed, setSubscribed] = useState(false);
{!subscribed?  
	<Row classes='subscribe'>
		<span>Subscribe to my tech blog</span>
		<Button content='Subscribe' type='secondary' classes='subs-btn' clickHandler={() => setSubscribed(true)} />
	</Row>
	:
	<span>Thank you for subscribing to my blog</span>
}
`

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

export const routes_in_browser = `
localhost:<port-number>/
localhost:<port-number>/home
localhost:<port-number>/contact`

export const concepts_of_contact = [
	`We initialize the state to consist of the form inputs, which are name, mail and message fields. Initially they are empty`,
	`In the componentDidMount we simulate the behaviour of an API call and set some data which we intend to retrieve from our backend server. In this case, we are setting the jacob's email id and home address.`,
	`HandleSubmit is a form submission function. In this case we are just logging the entered values to console. But ideally you would be making an POST call to your server to save this data somewhere.`,
	`If you closely look at each of the <Input /> components you can see that onChange is an 
		inline function, and we are doing certain tasks in that function. we are spreadind the existing state object and modifying only the respective field and passing that result to setState function.`,
	`The input value that you get to see in your browser is coming from the value prop for Input component. Whenever you type something, the onCHange is called, which modifies the state value and which in turn rerenders the page causing the value to get updated in the UI.`
];

export const mongo_connection = `
const mongodb = 'mongodb://localhost:27017/myprofile';
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error',() => console.error('db error'));
`;

export const contacts_model = `
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Contacts = new Schema({
  name: String,
  email: Date,
  message: String
}, { collection: 'potentialContacts' });

// Compile model from schema
const ContactsModel = mongoose.model('potentialContacts', Contacts);
export default ContactsModel;`