import React from "react"
import SearchList from "../../../components/List"
import { getSearchData } from "../../../fetch/search/search.js"
import LoadMore from "../../../components/LoadMore"

const initialState = {
	hasMore: false,
	data: [],
	isLoadingMore: false,
	page: 1
}

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state =initialState;
	}
	render() {
		return (
			<div>
				<SearchList data={this.state.data} />
				{
					this.state.hasMore
					? <LoadMore isLoadingMore = {this.state.isLoadingMore} LoadMoreFn = {this.loadMoreData.bind(this)} />
					: <div></div>
				}
			</div>
		)
	}

	componentDidMount() {
		this.loadFirstPageData();
	}

	loadFirstPageData() {
		const page = 0;
		const cityName = this.props.cityName;
		const category = this.props.category;
		const keyword = this.props.keyword;
		const result = getSearchData(page, cityName, category, keyword);
		this.resultHandle(result);
	}

	loadMoreData() {
		this.setState({
			isLoadingMore: true
		})
		const page = this.state.page;
		const cityName = this.props.cityName;
		const category = this.props.category;
		const keyword = this.props.keyword;
		const result = getSearchData(page, cityName, category, keyword);
		this.resultHandle(result);

		this.setState({
			isLoadingMore: false,
			page: page + 1
		})
	}

	resultHandle(result) {
		result.then((res) => {
			return res.json();
		}).then((json) => {
			const hasMore = json.hasMore;
			const data = json.data;
			this.setState({
				hasMore: hasMore,
				data: this.state.data.concat(data)
			})
		})
	}

	//处理重新搜索
	componentDidUpdate(prevProps, prevState) {
		const keyword = this.props.keyword;
		const category = this.props.category;

		if(keyword === prevProps.keyword && category === prevProps.category) {
			return;
		}

		this.setState(initialState);

		this.loadFirstPageData();
	}
}

export default List;