import React from "react"
import SearchHeader from "../../components/SearchHeader"
import List from "./subpage/List"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as userInfoActionsFromOtherFile from "../../actions/userinfo.js"

class Search extends React.Component {
	render() {
		const params = this.props.match.params;
		return (
			<div>
				<SearchHeader keyword={params.keyword} category={params.category} />
				<List cityName = {this.props.userinfo.cityName} category={params.category} keyword={params.keyword || ''} />
			</div>
		)
	}

	componentDidMount() {
		const params = this.props.match.params;
		console.log("category: " + params.category);
		console.log("keyword: " + params.keyword)
	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);