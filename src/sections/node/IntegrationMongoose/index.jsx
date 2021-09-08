import React, { useState } from 'react';
import Text from '../../../components/Text';
import CodeSnippet from '../../../components/CodeSnippet';
import { contacts_model, mongo_connection } from '../../../assets/constants';
import NodeProjStruc from '../../../assets/images/node/node_proj_structure.PNG';
import PostmanReq from '../../../assets/images/node/request_postman.PNG';
import { babelSetup, contactCreation, devjs, indexjs, packageJson, routes, src_index, startjs } from '../../../assets/constants/node_adv_setup';
import './style.css';
import BoldItalicize from '../../../components/BoldItalicize';

const IntegrationMongoose = () => {
	const [viewAdv, setViewAdv] = useState(false);
	return (
		<section>
			<h2 className='txt-cen'>Integrating Mongodb with our Node backend server application</h2>
			<Text>A <BoldItalicize>server</BoldItalicize> is basically an application that get data from your database and sends it to your frontend application</Text>
			<Text>All the complex tasks should be performed on our backend server and not on the frontend javscript engine</Text>
			<Text>Let's connect the database that we just created to the node application</Text>
			<Text>Before that lets setup some starter code for our node application</Text>
			<Text>This tutorial here assumes you have some prior knowledge of node. If you have not worked with node its totally fine, there are some very straight forward steps.</Text>
			<Text>Go to the startserver function in your node application, once the application has started, copy the following lines of code</Text>
			<CodeSnippet code={mongo_connection} />
			<Text>Lets create the Model classes which define our entities</Text>
			<Text><BoldItalicize>Project Structure</BoldItalicize></Text>
			<img src={NodeProjStruc} alt='Node Project Structure' />
			<Text>There are two schemas in this project, one is contacts which refers to the potential contact messages that we receive from our contact form in the react app, 
				and another is subscribers which stores all the users who have subscribed to the tech blog or news letters</Text>
			<Text>In this tutorial we'll create the first schema together, as an exercise I'll let you create the second one</Text>
			<Text>Inside the db/schema/ folder lets create a folder for contacts Model. Here we'll initialize the model with the fields in that collection </Text>
			<CodeSnippet code={contacts_model} />
			<Text>If you havent yet created your controller yet, go ahead and create it with a get request - route /api/data/contacts</Text>
			<Text>If you are having trouble setting up the node application, expand the following files below and copy them into your project</Text>
			{!viewAdv ? 
				<div 
					role='button' 
					tabIndex={0} 
					onClick={() => setViewAdv(true)}
					className='link_txt'
				>
					Show Complete Node setup
				</div> 
				: 
				<div
					role='button' 
					tabIndex={0} 
					onClick={() => setViewAdv(false)}
					className='link_txt'
				>
					Hide Setup
				</div>
			}
			{viewAdv && 
				<>
					<CodeSnippet code={packageJson} />
					<CodeSnippet code={indexjs} />
					<CodeSnippet code={devjs} />
					<CodeSnippet code={babelSetup} />
					<CodeSnippet code={startjs} />
					<CodeSnippet code={src_index} />
					<CodeSnippet code={routes} />
					<CodeSnippet code='npm install' />
				</>
			}
			<Text>Great, now that you have your controller setup, lets access the Model that we exported from the Contacts model. Lets execute a find() query and send the response in the get request</Text>
			<CodeSnippet code={`const data = await ContactsModel.find().exec();\nres.send(data);`} />
			<Text>Save the code and run your application</Text>
			<CodeSnippet code={`npm start`} />
			<Text>Your app should've started on a port, check the console to see the port number. Open the browser and enter the following url and see that you the data that you inserted into the mongodb table</Text>
			<CodeSnippet code='localhost:8000/api/data/contacts' />
			<Text>Lets create another API to create a contact entry that we can later integrate with our react application</Text>
			<CodeSnippet code={contactCreation} />
			<Text>Download and install Postman if you don't alreay have it</Text>
			<Text>Create a new Post request and hit the localhost:8000/api/data/contacts url</Text>
			<img src={PostmanReq} alt='Postman request' />
			<Text>That is all you need to do to create a backend server and integrate it with your data store which in this case is mongodb</Text>
			<h2 className='txt-cen'>That brings us to the end of integrating mongodb with node application tutorial</h2>
		</section>
	)
};

export default IntegrationMongoose;