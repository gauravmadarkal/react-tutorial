import ReactHome from './pages/reactHome';
import ReactNativeHome from './pages/reactNativeHome';
import MongoHome from './pages/mongoHome';

const Routes = [
	{
		name: 'React Home',
		path: ['/react', '/'],
		component: <ReactHome />
	},
	{
		name: 'React Native Home',
		path: '/reactnative',
		component: <ReactNativeHome />
	},
	{
		name: 'Mongo Home',
		path: '/mongo',
		component: <MongoHome />
	}
];

export default Routes;