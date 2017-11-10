import React from "react"
import Item from "./Item"

import "./style.less"

class HomeList extends React.Component {
	render() {
		return (
			<div className="list-container">
				{this.props.data.map((item, index) => {
					return <Item key={index} data={item} />
				})}
			</div>
		)
	}
}

export default HomeList;