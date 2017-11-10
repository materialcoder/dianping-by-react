import React from "react"
import { Link } from "react-router-dom"
import SearchInput from "../SearchInput"
import {hashHistory} from "../../history/hashHistory.js"

import "./style.less"

class HomeHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			kwd: ''
		}
	}
	render() {
		return (
			<div id="home-header" className="clear-fix">
				<div className="home-header-left fl">
					<Link to="/city">
						{this.props.cityName}
						&nbsp;
						<i className="icon-angle-down"></i>
					</Link>
				</div>
				<div className="home-header-right fr">
					<Link to="/login">
						<i className="icon-user"></i>
					</Link>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="icon-search"></i>
						<SearchInput value="" enterHandle={this.enterHandle.bind(this)} />
					</div>
				</div>
			</div>
		)
	}

	enterHandle(value) {
		const url = '/search/all/' + encodeURIComponent(value);
		hashHistory(url);
	}

}

export default HomeHeader;