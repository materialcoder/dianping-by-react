import React from "react"

import "./style.less"

class LoginComponent extends React.Component {
	render() {
		return (
			<div id="login-container">
				<div className="input-container phone-container">
					<i className="icon-tablet"></i>
					<input type="text"
						placeholder="请输入手机号" />
				</div>
				<div className="input-container password-container">
					<i className="icon-key"></i>
					<button>发送验证码</button>
					<input type="password" placeholder="请输入密码" />
				</div>
				<button className="btn-login">登录</button>
			</div>
		)
	}
}

export default LoginComponent;