import React from "react"
import OrderListComponent from "../../../components/OrderListComponent"
import { getOrderListData, postComment } from "../../../fetch/orderlist/orderList";
import "./style.less"

class OrderList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	render() {
		return (
			<div className="order-list-container">
				<h2>您的订单</h2>
				{
					this.state.data.length
					? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)} />
					: ''
				}
			</div>
		)
	}

	componentDidMount() {
		this.getOrderList();
	}

	//提交评论信息
	submitComment(id, comment, callback) {
		const result = postComment(id, comment);
		result.then(res => {
			return res.json();
		}).then(json => {
			if(json.errono === 0) {
				// 评价成功，修改状态
				callback();
			}
		})
	}

	//获取列表数据
	getOrderList() {
		const username = this.props.username;
		if(!username) {
			return;
		}
		const result = getOrderListData(username);
		this.resultHandle(result);
	}

	resultHandle(result) {
		result.then((res) => {
			return res.json()
		}).then((json) => {
			this.setState({
				data: json
			})
		})
	}
}

export default OrderList;