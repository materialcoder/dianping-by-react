import {get} from "../get.js"

export function getInfoData(id) {
	const result = get('/get/detail/info/' + id);
	return result;
}

export function getCommentData(page, id) {
	const result = get('/get/detail/comment/' + page + '/' + id);
	return result;
}