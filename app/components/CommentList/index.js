import React from "react"
import Item from "./Item"
import "./style.less"

class CommentList extends React.Component {
	render() {
		return (
			<div className="comment-list">
				{
					this.props.data.map((item,index) => {
						return <Item key={index} data={item} />
					})
				}
			</div>
		)
	}
}

export default CommentList;