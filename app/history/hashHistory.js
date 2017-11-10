import createHistory from "history/createHashHistory"

export function hashHistory(url) {
	const history = createHistory();
	const location = history.location;
	const unlisten = history.listen((location, action) => {
		// location is an object like window.location
		console.log(action, location.pathname, location.state);
	})

	history.push(url);

	// To stop listening, call the function returned from listen().
	unlisten();
}