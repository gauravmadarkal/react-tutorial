import React from 'react';
import Text from '../../../components/Text';
import BoldItalicize from '../../../components/BoldItalicize';
import CodeSnippet from '../../../components/CodeSnippet';
import Points from '../../../components/Points';
import { app_initial, component_starter, context_code, provider_code, style_starter } from '../../../assets/constants/reactNative';
import ProjectStructure from '../../../assets/images/react_native/project_structure.PNG';

const StartingWithReactNative = () => {
	return (
		<section>
			<h1 className='txt-cen'>Tutorial on React Native</h1>
			<Text>React native lets you build cross platform mobile application with little to no knowledge needed on the native language.</Text>
			<Text>The only case when you need to learn native language is when you need to make some edits internally to tweak the performance, 
				but having the knowledge of ios or android will help you understand the functionality better, to build the application production ready etc..</Text>
			<Text>You can use your knowledge of react directly to build react native. All the concepts of components, state management, hooks, context api etc.. remains the same, and thats the beauty of it.</Text>
			<Text>Only thing that is different about developing with react native is to learn the styling, which again is very similar to css</Text>
			<h3>Let's begin</h3>
			<h4>Environment Setup</h4>
			<Text><BoldItalicize>For Windows</BoldItalicize></Text>
			<Text>Install openjdk8</Text>
			<Text>Download and install Android Studio, we will need the following Android SDK, Android SDK Platform, Android Virtual Device (to run the simulator)</Text>
			<Text>Add the Android SDK path (username/AppData/local/Android/Sdk) to Environment variable PATH</Text>
			<Text><BoldItalicize>For MacOS</BoldItalicize></Text>
			<Text>Install XCode and ios simulator alogn with it</Text>
			<Text>In this tutorial we'll create an tutorial app which shows a list of tutorials a user has subscribed to. While building this app, we'll learn some very interesting built-in components that are given by react-native</Text>
			<CodeSnippet code='npx react-native init learnings_app' />
			<Text>The above command same as CRA, creates a template for us to get started on building the app. Open the folder in your choice of editor</Text>
			<Text>That is all the setup that you need to do</Text>
			<Text>How exactly does react native work?</Text>
			<Text>When you write some javacript code that is converted into an 
				equivalent native ui element. For example: RN has something called 
				a Text component which is mapped to a TextView which is an android native component</Text>
			<Text>When you start the react native app, a metro server is started. A metro server is what serves your code 
				to the mobile device.</Text>
			<Text>Your application is not completely installed on the mobile device when you are using the development environment. 
				In order to independently run it on a mobile device you need to build the application and install it on your device</Text>
			<Text>When you build the application, all the assets, like images, raw files are all bundled into a single application package.</Text>
			<Text><BoldItalicize>Let's start building the app</BoldItalicize></Text>
			<Text>Open terminal and run the respective command</Text>
			<Text>You can either run the application on your phone or run it on a emulator.</Text>
			<Text>In case of an emulator open android studio or xcode and create an emulator with all default options</Text>
			<Text>Open the emulator and wait for the mobile device to boot up</Text>
			<Text>In case of a physical device you need to enable USB debugging on your device</Text>
			<Text>Once that is done, connect the device to your PC and if you get a popup to "trust this computer", click on "yes"</Text>
			<Text>Your app should build and install on the device and open a home screen saying "welcome to react native"</Text>
			<CodeSnippet code='npm run android' />
			<Text>If for an reason the build fails, check the following steps</Text>
			<Points content={[
				'Open the android/io folder of your project in android-studio/xcode respectively and build the application once the project is loaded successfully',
				'In case of android, open settings and check if the sdk path is set to the right location'
			]} />
			<Text>If you have your application up and running then you are good to go</Text>
			<h3>Project Structure</h3>
			<Text>Create this folder structure in your project, <BoldItalicize>do not</BoldItalicize> worry about the contents of these files, we'll add that later</Text>
			<img src={ProjectStructure} alt='React Native project Structure' />
			<Text>Lets put in some starter code in each of these files. </Text>
			<Text>Go to all the index.jsx files you just created and paste the following code </Text>
			<CodeSnippet code={component_starter} />
			<Text>Go to all the style.js files you just created and paste the following code </Text>
			<CodeSnippet code={style_starter} />
			<Text>Now we have some basic idea of what screen will be present in our app, now we need a way to navigate between the screen, 
				for that purpose, we'll use a library called react navigation</Text>
			<Text>Open the terminal and run the command below</Text>
			<CodeSnippet code='npm install @react-navigation/native @react-navigation/native-stack' />

			<Text>Head over to App.js and remove the content being rendered in the function, and paste the below code</Text>
			<CodeSnippet code={app_initial} />
			<Text>The App component acts as a master telling which screen needs to rendered and what data needs to be passed to all the children components</Text>
			<Text>Lets learn a new react concept:</Text>
			<h4>React Context API</h4>
			<Text>A context api is high level state management. 
				If there is data that is common to multiple components or screens, then we use context api to store it in one place and use that data everywhere else.
				How is it different from maintaining state at the app level. If you maintain local state in App.js then you have to pass it down to each and every component that needs it.
				But with context api the props need not be passed. All the components which are the children on the context will have access to the state via useContext hook.
			</Text>
			<Text>Lets create a Global context which stores some of the basic app and user info</Text>
			<Text>Go into the /src/context/GlobalContext/GlobalContext.js Lets create a React context here. 
				A context is basically an object which will hold the value given by its respective provider</Text>
			<CodeSnippet code={context_code} />
			<Text>Now lets create a provider to this context which will basically tell the context what data needs to be served. Go into ./GlobalContext/provider/GlobalContextProvider.jsx</Text>
			<CodeSnippet code={provider_code} />
			<Text>Here, we are creating two state variables which we think will be used across the app repeatedly. 
				Hence we wil store that in the GlobalContext, the provider returns the children which are enclosed in that tag</Text>
			<Text>Now like you can see in the App.js we have wrapped the entire app with GlobalProvider so that all the components have access to the context data. This is an important step</Text>
			<Text>You can also see something called SafeAreaView which is used to handle the top bars. Some of the common things which block the screen view are:</Text>
			<Points content={[
				'Physical notches',
				'Status bar overlay',
				'Home activity indicator on iOS',
				'Navigation bar on Android'
			]} />
			<Text>In order to avoid your app view from overlapping on these screen elements, we use a SafeAreaView</Text>
			<CodeSnippet code='npm install react-native-screens react-native-safe-area-context' />
		</section>
	)
};

export default StartingWithReactNative;