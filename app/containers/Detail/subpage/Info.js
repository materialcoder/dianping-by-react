import React from "react"
import { getInfoData } from "../../../fetch/detail/detail.js"
import DetailInfo from "../../../components/DetailInfo"

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: []
		}
	}
	render() {
		return (
			<div>
				{
					this.state.info
					? <DetailInfo data={this.state.info} />
					: ''
				}
			</div>
		)
	}

	componentDidMount() {
		this.getInfo();
	}

	getInfo() {
		const id = this.props.id;
		const result = getInfoData(id);
		result.then((res) => {
			return res.json();
		}).then((json) => {
			const data = json;
			this.setState({
				info: data
			})
		})
	}
}

export default Info;