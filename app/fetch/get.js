import "whatwg-fetch"

export function get(url) {
	var result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		}
	});
	return result;
}