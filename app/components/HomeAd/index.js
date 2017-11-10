import React from "react"
import "./style.less"

class HomeAd extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="home-ad">
				<h2>超值特惠</h2>
				<div className="ad-container clear-fix">
					{this.props.data.map((item, index) => {
						return (
							<div key={index} className="ad-item fl">
								<a href={item.link} target="_balnk">
									<img src={item.img} alt={item.title} />
								</a>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default HomeAd;