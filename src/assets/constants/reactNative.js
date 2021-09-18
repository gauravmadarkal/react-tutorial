export const app_initial = `
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
	createNativeStackNavigator
} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import GlobalContextProvider from './src/context/GlobalContext/provider/GlobalContextProvider';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import AppContainer from './src/layout/AppContainer';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const Stack = createNativeStackNavigator();
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<GlobalContextProvider>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={backgroundStyle}
				>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen 
								name='Home'
							>
								<AppContainer>
									<Home />
								</AppContainer>
							</Stack.Screen>
							<Stack.Screen 
								name='Profile'
								// component={Profile}
							>
								<AppContainer>
									<Profile />
								</AppContainer>
							</Stack.Screen>
						</Stack.Navigator>
					</NavigationContainer>
				</ScrollView>
			</GlobalContextProvider>
		</SafeAreaView>
	);
};

export default App;
`;

export const component_starter = `
import React from 'react';
import { View } from 'react-native';
import style from './style';

const Component = () => {
	return (
		<View>
			
		</View>
	)
};

export default Component;
`;

export const style_starter = `
import { StyleSheet } from 'react-native';

const style = {

};

export default StyleSheet.create(style);
`;

export const context_code = `
import React from 'react';

const GlobalContext = React.createContext();
GlobalContext.displayName = 'Global Context';

export default GlobalContext;`;

export const provider_code = `
import React, { useState } from 'react';
import GlobalContext from '../GlobalContext';


const GlobalContextProvider = ({
	children
}) => {
	const [appVersion, setAppVersion] = useState('1.0.0');
	const [profileDetails, setProfileDetails] = useState({
		name: 'Jane',
		image: null,
		username: 'jane_doe',
		address: 'University Avenue, Boulder, CO',
		payment_details: null,
		transactions: []
	});

	// useEffect(() => {
	// 	// in realuity you will
	// 	// make an api call to backend to fetch profile details and setProfileDetails
	// }, []);

	<GlobalContext.Provider
		value={{
			appVersion,
			profileDetails
		}}
	>
		{children}
	</GlobalContext.Provider>
};

export default GlobalContextProvider;`

export const card_component= `
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import ArrowIcon from '../../assets/icons/arrow.png';


const Card = ({
	title,
	completionStatus
}) => {
	return (
		<TouchableOpacity style={[style.container, completionStatus === 0? style.notStarted: completionStatus < 100? style.pending : style.completed]}>
			<View style={style.content}>
				<Text style={style.title}>{title}</Text>
				<Text style={style.completionStatus}>Completed: {completionStatus}%</Text>
			</View>
			<Image source={ArrowIcon} style={style.viewTutorial} />
		</TouchableOpacity>
	)
};

export default Card;`;

export const card_styling =`
container: {
	height: 120,
	borderRadius: 10,
	padding: 10,
	margin: 10,
	flex: 1,
	flexDirection: 'row',
	alignItems: 'center',
	elevation: 3,
	backgroundColor: '#e0f7fa'
},
content: {
	flexDirection: 'column'
},
title: {
	fontSize: 17,
	fontWeight: 'bold',
	maxWidth: 100
},
completionStatus: {
	fontSize: 13,
	color: colors.black
},
viewTutorial: {
	width: 20,
	height: 20,
	alignSelf: 'center',
},
completed: {
	backgroundColor: colors.success,
}`;