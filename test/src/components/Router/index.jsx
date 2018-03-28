import React                       from 'react'
import {HashRouter, BrowserRouter} from 'react-router-dom'
import MobileDetectWrapper         from '../MobileDetectWrapper'

const Router = ({children, IE}) => {
	const Portal = IE < 10 ? HashRouter : BrowserRouter;
	
	return <Portal>{children}</Portal>
};

export default MobileDetectWrapper(Router, ['IE'])