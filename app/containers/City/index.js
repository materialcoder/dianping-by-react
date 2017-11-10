import React from "react"
import Header from "../../components/Header"
import CurrentCity from "../../components/CurrentCity"
import CityList from "../../components/CityList"

import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as userInfoActionsFromOtherFile from "../../actions/userinfo.js"
import { CITYNAME } from "../../config/localStoreKey.js"
import localStore from "../../util/localStore"

class City extends React.Component {
	render() {
		return (
			<div>
				<Header title="选择城市"/>
				<CurrentCity cityName={this.props.userinfo.cityName} />
				<CityList changeFn={this.changeCity.bind(this)} />
			</div>
		)
	}

	componentDidMount() {
		/*console.log(this.props.userinfo)
		console.log(this.props.userinfoActions)*/
	}

	changeCity(newCity) {
		if(newCity == null) {
			return;
		}
		const userinfo = this.props.userinfo;
		userinfo.cityName = newCity;
		this.props.userinfoActions.update(userinfo);

		localStore.setItem(CITYNAME, newCity);

		window.history.back()
	}
}


function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(City);