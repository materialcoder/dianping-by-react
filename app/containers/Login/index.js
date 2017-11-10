import React from "react"
import Header from "../../components/Header"
import LoginComponent from "../../components/LoginComponent"

import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as userInfoActionsFromOtherFile from "../../actions/userinfo.js"

import {hashHistory} from "../../history/hashHistory.js"

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checking: true
		}
	}
	render() {
		return (
			<div>
				<Header title="登录" />
				{
					this.state.checking
					? <div>{/* 加载中... */}</div>
					: <LoginComponent loginHandle={this.loginHandle.bind(this)} />
				}
			</div>
		)
	}

	componentDidMount() {
		this.doCheck();
	}

	doCheck() {
		const userinfo = this.props.userinfo;
		if(userinfo.username) {
			//已经登录
			this.goUserPage(); //跳转到用户中心页
		} else {
			//尚未登录
			this.setState({
				checking: false
			})
		}
	}

	goUserPage() {
		hashHistory('/user')
	}

	loginHandle(username) {
		//保存用户名
		const action = this.props.userinfoActions;
		let userinfo = this.props.userinfo;
		userinfo.username = username;
		actions.update(userinfo);

		//跳转链接
		const params = this.props.match.params;
		const router = params.router;
		if(router) {
			hashHistory(router)
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
		userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);