import React from "react"
import HomeHeader from "../../components/homeHeader"
import Category from "../../components/Category"
import Ad from "./subpage/Ad"
import List from "./subpage/List"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as userInfoActionsFromOtherFile from "../../actions/userinfo.js"

class Home extends React.Component {
	render() {
		return (
			<div>
				<HomeHeader cityName={this.props.userinfo.cityName} />
				<Category />
				<div style={{height: '15px'}}></div>
				<Ad />
				<List cityName={this.props.userinfo.cityName} />
			</div>
		)
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
)(Home);