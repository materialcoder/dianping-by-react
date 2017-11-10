import React from "react"
import Star from "../../Star"
import "./style.less"

class Item extends React.Component {
	render() {
		const data = this.props.data;
		return (
			<div className="comment-item">
				<h3>
					<i className="icon-user"></i>
					&nbsp;
					{data.username}
				</h3>
				<Star star={data.star} />
				<p>{data.comment}</p>
			</div>
		)
	}
}

export default Item;