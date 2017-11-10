import React from "react"
import "./style.less"

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commentState: 2 //0 - 未评价 1 - 评价中 2 - 已评价
		}
	}
	render() {
		const item = this.props.item;
		return (
			<div className="order-item-container">
				<div className="clear-fix">
					<div className="order-item-img fl">
						<img src={item.img} alt={item.title} />
					</div>
					<div className="order-item-comment fr">
						{
							this.state.commentState === 0
							? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
							: this.state.commentState === 1
							? ''
							: <button className="btn unselected-btn">已评价</button>
						}
					</div>
					<div className="order-item-content">
						<span>商户：{item.title}</span>
						<span>数量：{item.count}</span>
						<span>价格：￥{item.price}</span>
					</div>
				</div>
				{
					this.state.commentState === 1
					? <div className="comment-text-container">
						<textarea ref="comment" style={{width: '100%', height: '80px'}} className="comment-text"></textarea>
						<button className="btn" onClick={this.submitComment.bind(this)} >提交</button>
						&nbsp;
						<button className="btn unselected-btn" onClick={this.hideComment.bind(this)}>取消</button>
					  </div>
					: ''
				}
			</div>
		)
	}

	componentDidMount() {
		this.setState({
			commentState: this.props.item.commentState
		})
	}

	submitComment() {
		const id = this.props.item.id;
		const comment = this.refs.comment.value.trim();
		const submitComment = this.props.submitComment;
		if(!comment) {
			return;
		}
		//提交数据
		submitComment(id, comment, this.commentOk.bind(this))
	}

	commentOk() {
		this.setState({
			commentState: 2
		})
	}

	showComment() {
		this.setState({
			commentState: 1
		})
	}

	hideComment() {
		this.setState({
			commentState: 0
		})
	}
}

export default Item;