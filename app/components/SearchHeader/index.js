import React from "react"
import { hashHistory } from "../../history/hashHistory.js"
import SearchInput from "../SearchInput"

import "./style.less"

class SearchHeader extends React.Component {
	render() {
		return (
			<div id="search-header" className="clear-fix">
				<span className="back-icon fl" onClick={this.clickHandle.bind(this)}>
					<i className="icon-chevron-left"></i>
				</span>
				<div className="input-container">
					<i className="icon-search"></i>
					&nbsp;
					<SearchInput value={this.props.keyword || ""} enterHandle={this.enterHandle.bind(this)} />
				</div>
			</div>
		)
	}

	clickHandle() {
		hashHistory('/')
	}

	enterHandle(value) {
		const category = this.props.category;
		const url = '/search/' + category + '/' + encodeURIComponent(value);
		hashHistory(url);
	}
}

export default SearchHeader;