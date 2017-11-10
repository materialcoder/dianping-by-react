import { get } from "../get.js"

export function getSearchData(page, cityName, category, keyword) {
	const keywordStr = keyword ? '/'+keyword : '';
	const result = get('get/search/' + page + '/' + cityName + '/' + category + keywordStr);
	return result;
}