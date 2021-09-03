import React from 'react';
import { npm_npx_dets } from '../../../assets/constants';
import CodeSnippet from '../../../components/CodeSnippet';
import Points from '../../../components/Points';
import Text from '../../../components/Text';
import CRA_out from '../../../assets/images/cra-output.PNG';

const EnvSetup = () => (
	<section>
		<h2 class="section-header">Environment Setup</h2>
		<Text>Things needed to get started with react.</Text>
		<Points content={['Node runtime (https://nodejs.org/en/download/)', 'VS Code (IDE for writing code).']} />
		<Text>Once you are done installing both these tools, head over to the command line and run the following commands.</Text>
		<CodeSnippet code='npx create-react-app personal-website' />
		<Text>Replace the name 'personal-website' with whatever name you want to give to your application.</Text>
		<Text>While the commands takes time to complete, lets see what it says.</Text>
		<Points content={npm_npx_dets} />
		<img src={CRA_out} alt='Create React App output' />
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
);

export default EnvSetup;