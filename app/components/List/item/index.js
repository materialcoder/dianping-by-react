import React from "react"
import { Link } from "react-router-dom"

import "./style.less"

class Item extends React.Component {
	render() {
		const data = this.props.data;
		return (
			<Link to={"/detail/" + data.id}>
				<div className="list-item clear-fix">
					
						<div className="item-img-container fl">
							<img src={data.img} alt={data.title} />
						</div>
					
					<div className="item-content">
						<div className="item-title-container clear-fix">
							<h3 className="fl">{data.title}</h3>
							<span className="fr">{data.distance}</span>
						</div>
						<p className="item-sub-title">{data.subTitle}</p>
						<div className="item-price-container clear-fix">
							<span className="price fl">￥{data.price}</span>
							<span className="number fr">已售{data.number}</span>
						</div>
					</div>
				</div>
			</Link>
		)
	}
}

export default Item;