import React, { Component } from "react";
import {render} from "react-dom";
import RouterMap from "./router/routerMap";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore"

import "./static/css/common.less"
import "./static/css/font.css"

let store = configureStore()

render(
	<Provider store={store}>
		<RouterMap />
	</Provider>,
	 document.getElementById('root')
);