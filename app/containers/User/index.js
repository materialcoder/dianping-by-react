import React from "react"
import Header from "../../components/Header"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import UserInfo from "../../components/UserInfo"
import OrderList from "./subpage/OrderList"
import {hashHistory} from "../../history/hashHistory"

class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const userinfo = this.props.userinfo;
		return (
			<div>
				<Header title="用户主页" backRouter="/" />
				<UserInfo username={userinfo.username} city={userinfo.cityName} />
				<OrderList username={userinfo.username} />
			</div>
		)
	}
	componentDidMount() {
		if(!this.props.userinfo.username) {
			hashHistory('/login');
		}
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
)(User);