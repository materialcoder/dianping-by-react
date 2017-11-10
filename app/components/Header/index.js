import React from "react"
import { hashHistory } from "../../history/hashHistory.js"

import "./style.less"

class Header extends React.Component {
	render() {
		return (
			<div id="common-header">
				<span className="back-icon" onClick={this.clickHandle.bind(this)}>
					<i className="icon-chevron-left"></i>
				</span>
				<h1>{this.props.title}</h1>
			</div>
		)
	}

	clickHandle() {
		const backRouter = this.props.backRouter;
		if(backRouter) {
			hashHistory(backRouter)
		} else {
			window.history.back();
		}
	}
}

export default Header;