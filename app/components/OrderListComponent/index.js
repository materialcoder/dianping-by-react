import React from "react"
import Item from "./Item"

import "./style.less"

class OrderListComponent extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.data.map((item,index) => {
						return <Item key={index} item={item} submitComment={this.props.submitComment} />
					})
				}
			</div>
		)
	}
}

export default OrderListComponent;