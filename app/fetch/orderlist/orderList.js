import {get} from "../get.js"
import {post} from "../post.js"

export function getOrderListData(username) {
	const result = get('/get/orderlist/' + username);
	return result;
}

export function postComment(id, comment) {
	const result = post('/post/submitComment', {
		id: id,
		comment: comment
	});
	return result;
}