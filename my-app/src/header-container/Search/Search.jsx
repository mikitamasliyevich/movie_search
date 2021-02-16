import React from "react"
import { Button } from 'react-bootstrap';
import "../styles/Search/search.scss"
import "../styles/Search-btn/search-btn.scss"
import "../styles/Search-preloader/style-preloader.scss"
import { getMovieTitle } from "../../fetch/Fetch"
import "../styles/Delete-btn/delete-btn.scss"
import "../styles/Text-error/text-error.scss"

class Search extends React.Component {
	state = {
		isFetching: { display: "none" },
		isSearchMovie: { display: "block" },
		isSearchYourMovieText: "Search your movie",
		isMovieFound: "You have found a great movie",
		isSearchYourMistakesTrue: { display: "block" },
		isSearchYourMistakesFalse: { display: "none" },
		isTrueResult: { display: "none" },
		isFalseResult: { display: "none" },
	}

	componentDidUpdate = (prevProps) => {
		if (prevProps.searchUpdate !== this.props.searchUpdate) {
			onchange = () => {
				this.setState({ isFetching: { display: "block" } })
				this.setState({ isTrueResult: { display: "block" } })
			}
			getMovieTitle(this.props.onChangeCounter, this.props.onlistErrors, this.props.onlistTrueResult, this.props.search, this.props.page_num, this.props.keys)
			this.setState({ isFetching: { display: "none" } })
			this.setState({ isSearchMovie: { display: "none" } })
			this.setState({ isTrueResult: { display: "block" } })
		}
	}




	render() {
		const handleinput = this.props.handleinput

		return (

			<div className="searchbox-wrap">
				<input
					type="text"
					placeholder="Search for a movie..."
					className="searchbox"
					onChange={handleinput}
					value={this.props.search}
					onKeyUp={this.props.handleKeyPress}
				/>

				<span className="icon-clear"
					title="Clear"
					onClick={this.props.clearInput}>
				</span>

				<Button
					variant="danger"
					onClick={this.props.onChangeSearchUpdate}
				>
					Search
	 </Button>
				<div className="main-circle" style={this.state.isFetching}>
					<div className="green-circle">
						<div className="brown-circle">
						</div>
					</div>
				</div>
				<p className="text-error" style={this.state.isSearchMovie}>{this.state.isSearchYourMovieText}</p>
				<p className="text-error" style={this.props.listTrueResult === "False" ? this.state.isSearchYourMistakesTrue : this.props.listTrueResult === "True" ? this.state.isSearchYourMistakesFalse : null}> {this.props.listErrors}</p>
				<p className="text-error" style={this.props.listTrueResult === "True" ? this.state.isTrueResult : this.props.listTrueResult === "False" ? this.state.isFalseResult : null}>{this.state.isMovieFound}</p>

			</div>

		)
	}
}
export default Search
