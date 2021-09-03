import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Routes from './routes_config';

function App() {
  return (
	  <Router>
		  <Switch>
			  	{Routes.map(route => (
				  	<Route path={route.path} exact>
						<main>
							{route.component}
						</main>
					</Route>
			  	))}
		  </Switch>
	  </Router>
  );
}

export default App;
