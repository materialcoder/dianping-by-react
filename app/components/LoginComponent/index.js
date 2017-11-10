import React from "react"

import "./style.less"

class LoginComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
	}
	render() {
		return (
			<div id="login-container">
				<div className="input-container phone-container">
					<i className="icon-tablet"></i>
					<input type="text"
						placeholder="请输入手机号"
						value = {this.state.username}
						onChange = {this.changeHandle.bind(this)} />
				</div>
				<div className="input-container password-container">
					<i className="icon-key"></i>
					<button>发送验证码</button>
					<input type="password" placeholder="请输入密码" />
				</div>
				<button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
			</div>
		)
	}

	changeHandle(e) {
		const username = e.target.value;
		this.setState({
			username: username
		});
	}

	clickHandle() {
		const username = this.state.username;
		this.props.loginHandle(username);
	}
}

export default LoginComponent;