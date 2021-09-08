import ReactHome from './pages/reactHome';
import ReactNativeHome from './pages/reactNativeHome';
import MongoHome from './pages/mongoHome';
import NodeHome from './pages/nodeHome';

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
	},
	{
		name: 'Node Home',
		path: '/node',
		component: <NodeHome />
	}
];

export default Routes;