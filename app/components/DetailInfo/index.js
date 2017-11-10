import React from "react"
import Star from "../Star"

import "./style.less"

class DetailInfo extends React.Component {
	render() {
		const data = this.props.data;
		return (
			<div id="detail-info-container">
				<div className="info-container clear-fix">
					<div className="info-img-container fl">
						<img src={data.img} alt={data.title}/>
					</div>
					<div className="info-content">
						<h1>{data.title}</h1>
						<div className="star-container">
							<Star star={data.star} />
							<span className="price">￥{data.price}</span>
						</div>
						<p className="sub-title">{data.subTitle}</p>
					</div>
				</div>
				<p className="info-desc" dangerouslySetInnerHTML={{__html: data.desc}}></p>
			</div>
		)
	}
}

export default DetailInfo;