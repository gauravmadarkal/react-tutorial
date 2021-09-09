import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/Scrolltop';
import Text from './components/Text';
import Routes from './routes_config';

function App() {
  return (
	  <Router>
		  <Switch>
			  	{Routes.map(route => (
				  	<Route path={route.path} exact>
						<main>
							<div className='container'>
								{route.component}
							</div>
							<ScrollToTop />
							<div className='footer'>
								<h3>Designed and Developed by <a href='https://gauravmadarkal.com' target='_blank' rel='noreferrer' className='txt-invert'>Gaurav Madarkal</a></h3>
								<Text classes='txt-invert'>All the content has been cited from the official documentaation</Text>
							</div>
						</main>
					</Route>
			  	))}
		  </Switch>
	  </Router>
  );
}

export default App;
