import React, {Component} from "react";
import LocalStore from "../util/localStore.js"
import { CITYNAME } from "../config/localStoreKey.js"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as userInfoActionsFromOtherFile from "../actions/userinfo.js"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialDone: false
		}
	}
	render() {
		return (
			<div>
				{
					this.state.initialDone
					? this.props.children
					: <div>加载中...</div>
				}
			</div>
		)
	}
	componentDidMount() {
		//从localStora里面获取城市
		let cityName = LocalStore.getItem(CITYNAME);
		if(cityName == null) {
			cityName = "北京";
		}

		//将城市信息存储到 Redux 中
		this.props.userInfoActions.update({
			cityName
		})
		setTimeout(() => {
			this.setState({
				initialDone: true
			})
		}, 1000);
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);