import React from 'react'
import Router from './components/Router'
import RouteWrapper from './components/RouteWrapper'

const App = () => (
	<Router>
		<RouteWrapper>{console.log('hello world')}
		</RouteWrapper>
	</Router>
);

export default App