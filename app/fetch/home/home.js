import { get } from "../get"

export function getAdData() {
	const result = get('/get/homead')
	return result;
}

export function getListData(city, page) {
	const result = get('/get/homelist/'+encodeURIComponent(city) + '/' + page)
	return result;
}