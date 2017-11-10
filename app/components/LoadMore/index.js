import React from "react"

import "./style.less"

class LoadMore extends React.Component {
	render() {
		return (
			<div className="load-more" ref="wrapper">
				{
					this.props.isLoadingMore
					? <span>加载中...</span>
					: <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
				}
			</div>
		)
	}

	loadMoreHandle() {
		this.props.LoadMoreFn();
	}

	componentDidMount() {
		const LoadMoreFn = this.props.LoadMoreFn;
		const wrapper = this.refs.wrapper;
		let timeoutId;
		function callback() {
			const top = wrapper.getBoundingClientRect().top;
			const windowHeight = window.screen.height;
			if(top && top < windowHeight) {
				LoadMoreFn();
			}
		}
		window.addEventListener("scroll", function() {
			if(this.props.isLoadingMore) {
				return;
			}
			if(timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(callback, 50)
		}.bind(this), false)
	}
}

export default LoadMore;