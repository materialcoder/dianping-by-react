import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import App from "../containers"
import Home from "../containers/Home"
import City from "../containers/City"
import User from "../containers/User"
import Login from "../containers/Login"
import Search from "../containers/Search"
import Detail from "../containers/Detail"
import NotFound from "../containers/404"

class RouterMap extends React.Component {
	render() {
		return (
			<App>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/city" component={City} />
						<Route path="/user" component={User} />
						<Route path="/login/:router?" component={Login} />
						<Route path="/search/:category/:keyword?" component={Search} />
						<Route path="/detail/:id" component={Detail} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</App>
		)
	}
}

export default RouterMap;