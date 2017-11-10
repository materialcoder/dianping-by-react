import React from "react"

import { getListData } from "../../../fetch/home/home.js"
import HomeList from "../../../components/List"
import LoadMore from "../../../components/LoadMore"

import "./style.less"

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			hasMore: false,
			isLoadingMore: false, //记录当前状态下是“加载中...”还是“点击加载更多”
			page: 1  //下一页的页码
		}
	}
	render() {
		return (
			<div>
				<h2 className="home-list-title">猜你喜欢</h2>
				{
					this.state.data.length
					? <HomeList data={this.state.data} />
					: <div>加载中...</div>
				}
				{
					this.state.hasMore
					? <LoadMore isLoadingMore = {this.state.isLoadingMore} LoadMoreFn = {this.loadMoreData.bind(this)} />
					: <div></div>
				}
			</div>
		)
	}
	componentDidMount() {
		this.loadFirstPageData()
	}

	//获取首屏数据
	loadFirstPageData() {
		const city = this.props.cityName;
		const page = 0;
		const result = getListData(city, page);
		this.resultHandle(result);
	}

	//加载更多数据
	loadMoreData() {
		//记录状态
		this.setState({
			isLoadingMore: true
		});
		const city = this.props.cityName;
		const page = this.state.page;
		const result = getListData(city, page);
		this.resultHandle(result);
	
		//增加page
		this.setState({
			page: page + 1,
			isLoadingMore: false
		})
	}

	//处理数据
	resultHandle(result) {
		result.then((res) => {
			return res.json();
		}).then((json) => {
			const hasMore = json.hasMore;
			const data = json.data;
			if(data.length) {
				this.setState({
					data: this.state.data.concat(data),
					hasMore: hasMore
				})
			}
		})
	}
}

export default List;