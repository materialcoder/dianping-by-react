import React from "react"
import "./style.less"

class BuyAndStore extends React.Component {
	render() {
		return (
			<div className="buy-store-container clear-fix">
				<div className="item-container fl">
					{
						this.props.isStore
						? <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>
						: <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
					}
				</div>
				<div className="item-container fr">
					<button onClick={this.buyClickHandle.bind(this)}>购买</button>
				</div>
			</div>
		)
	}

	buyClickHandle() {
		this.props.buyHandle();
	}

	storeClickHandle() {
		this.props.storeHandle();
	}
}

export default BuyAndStore;