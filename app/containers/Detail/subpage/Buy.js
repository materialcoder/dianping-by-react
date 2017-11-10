import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as storeActionsFromFile from "../../../actions/store.js"
import BuyAndStore from "../../../components/BuyAndStore"

import {hashHistory} from "../../../history/hashHistory"

class Buy extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStore: false
		}
	}
	render() {
		return (
			<div>
				<BuyAndStore isStore = {this.state.isStore}
							buyHandle = {this.buyHandle.bind(this)} 
							storeHandle = {this.storeHandle.bind(this)} />
			</div>
		)
	}
	componentDidMount() {
		/*console.log(this.props.store)
		console.log(this.props.storeActions)*/
		this.checkStoreState();
	}

	//检验当前用户是否已收藏
	checkStoreState() {
		const id = this.props.id;
		const store = this.props.store;
		store.some(item => {
			if(item.id === id) {
				this.setState({
					isStore: true
				});
				//跳出循环
				return true;
			}
		});
	}
	
	//购买事件
	buyHandle() {
		//验证登录
		const loginFlag = this.loginCheck();
		if(!loginFlag) {
			return;
		}

		//购买流程

		//跳转到用户主页
		hashHistory('/user')
	}

	//收藏事件
	storeHandle() {
		//验证登录
		const loginFlag = this.loginCheck();
		if(!loginFlag) {
			return;
		}

		const id = this.props.id;
		const storeActions = this.props.storeActions;
		if(this.state.isStore) {
			//已经被收藏，点击时取消收藏
			storeActions.rm({id: id})
		} else {
			//当前商户没有被收藏，点击时收藏
			storeActions.add({id: id})
		}

		//修改状态
		this.setState({
			isStore: !this.state.isStore
		})
	}

	//验证登录
	loginCheck() {
		const id = this.props.id;
		const userinfo = this.props.userinfo;
		if(!userinfo.username) {
			//跳转到登录页面
			hashHistory('/login/'+encodeURIComponent('detail/'+id))
			return false;
		}
		return true;
	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo,
		store: state.store
	}
}

function mapDispatchToProps(dispatch) {
	return {
		storeActions: bindActionCreators(storeActionsFromFile, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Buy);