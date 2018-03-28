import React, {Component}                                 from 'react';
import {isMobile, isTablet, isAndroid, isIos, getVersion} from '../../util/detect';

const logic = (p, n) => ({...p, [n.replace(/\s/g, '_')]: getVersion(n),});

const mdw = (MobileDetectWrapper, target = []) =>
	class extends Component {
		constructor() {
			super();
			this.state = {
				isMobile : isMobile(),
				isTablet : isTablet(),
				isAndroid: isAndroid(),
				isIos    : isIos(),
				...target.reduce(logic, {}),
			}
		}
		
		render() {
			return <MobileDetectWrapper {...this.props} {...this.state} />
		}
	};

export default mdw;
