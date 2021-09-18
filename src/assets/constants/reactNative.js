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
	Image,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import {
	createNativeStackNavigator
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GlobalContextProvider from './src/context/GlobalContext/provider/GlobalContextProvider';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import AccountIcon from './src/assets/icons/user.png';
import HeaderTitle from './src/components/HeaderTitle';

const Stack = createNativeStackNavigator();
function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar
				animated
				translucent
				backgroundColor='#000'
				barStyle='light-content'
			/>
			<GlobalContextProvider>
				<NavigationContainer>
					<Stack.Navigator initialRouteName='Home'>
						<Stack.Screen 
							name='Home'
							children={Home}
							options={({ navigation }) => ({
								headerTitle: () => <HeaderTitle />,
								headerRight: () => (
									<TouchableOpacity
										onPress={() => navigation.navigate('Profile')}
									>
										<Image source={AccountIcon} style={{ width: 20, height: 20 }} />
									</TouchableOpacity>
								),
								headerStyle: {
									backgroundColor: '#263238',
								},
							})}
						/>
						<Stack.Screen 
							name='Profile'
							children={Profile}
							options={() => ({	
								headerTitle: () => <HeaderTitle title='My Profile' />,
								headerStyle: {
									backgroundColor: '#263238',
								},
								headerTintColor: '#fff',
							})}
						/>
					</Stack.Navigator>
				</NavigationContainer>
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
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';


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
			<View style={style.button}>
				<Text style={{ fontWeight: 'bold' }}>
					{completionStatus === 0? 'Start' : completionStatus < 100 ? 'Resume': 'Restart'}
				</Text>
			</View>
		</TouchableOpacity>
	)
};

export default Card;`;

export const card_styling =`
container: {
	borderRadius: 10,
	margin: 10,
	flex: 1,
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
	maxWidth: 100,
	margin: 10,
	marginBottom: 0
},
completionStatus: {
	fontSize: 13,
	color: colors.black,
	margin: 10,
},
button: {
	height: 30,
	backgroundColor: colors.info,
	width: '100%',
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	borderBottomLeftRadius: 10,
	borderBottomRightRadius: 10
},
completed: {
	backgroundColor: colors.success,
}`;

export const home_screen = `
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { tutorials } from '../../assets/constants';
import Card from '../../components/Card';
import style from './style';

const Home = () => {
	return (
		<ScrollView style={style.container}>
			{Object.keys(tutorials).map((key) => (
				<View>
					<Text style={style.sectionHeader}>{key}</Text>
					<FlatList 
						data={tutorials[key]}
						horizontal
						showsHorizontalScrollIndicator={false}
						renderItem={({ item }) => (
							<Card 
								title={item.title}
								completionStatus={item.status}
							/>
						)}
					/>
				</View>
			))}
		</ScrollView>
	)
};

export default Home;`;

export const home_styling = `
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/variables';

const style = {
	container: {
		flex: 1, 
		backgroundColor: colors.bg,
		padding: 10,
		paddingTop: 20
	},
	sectionHeader: {
		fontSize: 20,
		fontWeight: 'bold'
	}
};

export default StyleSheet.create(style);`;

export const header_title = `
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { colors } from '../../assets/variables';
import GlobalContext from '../../context/GlobalContext/GlobalContext';

const HeaderTitle = ({ title }) => {
	const { profileDetails } = useContext(GlobalContext);
	return (
		<Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: colors.white }}>
			{title? title : \`Welcome back, \${profileDetails.name}\`}
		</Text>
	)
}

export default HeaderTitle;`;