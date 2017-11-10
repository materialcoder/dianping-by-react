import React, { Component } from "react"
import { getAdData } from "../../../fetch/home/home.js"
import HomeAd from "../../../components/HomeAd"

class Ad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	render() {
		return (
			<HomeAd data={this.state.data} />
		)
	}
	componentDidMount() {
		const result = getAdData();
		result.then((res) => {
			return res.json()
		}).then((json) => {
			const data = json;
			if(data.length) {
				this.setState({
					data: data
				})
			}
		})
	}
}

export default Ad;