import Headline from "../Headline/Headline";
import Search from "../Search/Search"
import React from "react"


class HeaderContainer extends React.Component {
	state = {
		searchUpdate: false,
	}

	onChangeSearchUpdate = () => {
		this.setState({ searchUpdate: this.state.searchUpdate ? false : true })
	}

	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.onChangeSearchUpdate()
		}
	}

	render() {

		return (
			<div className="header-container">
				<Headline />
				<Search
					onChangeSearchUpdate={this.onChangeSearchUpdate}
					listTrueResult={this.props.listTrueResult}
					onlistTrueResult={this.props.onlistTrueResult}
					listErrors={this.props.listErrors}
					page_num={this.props.page_num}
					searchUpdate={this.state.searchUpdate}
					handleinput={this.props.handleinput}
					search={this.props.search}
					onChangeCounter={this.props.onChangeCounter}
					onlistErrors={this.props.onlistErrors}
					keys={this.props.Key}
					listMoviesFromApi={this.props.listMoviesFromApi}
					setSearch={this.props.setSearch}
					clearInput={this.props.clearInput}
					handleKeyPress={this.handleKeyPress}
				/>
			</div>
		)
	}
}


export default HeaderContainer
