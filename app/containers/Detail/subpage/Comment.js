import React from "react"
import { getCommentData } from "../../../fetch/detail/detail.js"
import CommentList from "../../../components/CommentList"
import LoadMore from "../../../components/LoadMore"
import "./style.less"

class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasMore: false,
			data: [],
			isLoadingMore: false,
			page: 1
		}
	}
	render() {
		return (
			<div className="detail-comment-subpage">
				<h2>评论列表</h2>
				{
					this.state.data.length
					? <CommentList data = {this.state.data} />
					: <div>加载中...</div>
				}
				{
					this.state.hasMore
					? <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.loadMoreData.bind(this)} />
					: <div>我也是有底线的好吗...</div>
				}
			</div>
		)
	}

	componentDidMount() {
		this.loadFirstPage();
	}

	loadFirstPage() {
		const id = this.props.id;
		const page = 0;
		const result = getCommentData(page, id);
		this.resultHandle(result);
	}

	loadMoreData() {
		this.setState({
			isLoadingMore: true
		});
		const id = this.props.id;
		const page = this.state.page;
		const result = getCommentData(page, id);
		this.resultHandle(result);

		this.setState({
			page: page + 1,
			isLoadingMore: false
		});
	}

	resultHandle(result) {
		result.then((res) => {
			return res.json();
		}).then((json) => {
			const data = json.data;
			const hasMore = json.hasMore;
			this.setState({
				data: this.state.data.concat(data),
				hasMore: hasMore
			})
		})
	}
}

export default Comment;