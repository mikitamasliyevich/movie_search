import React from "react"
import '../styles/App.scss';
import HeaderContainer from "../../header-container/Header-container/Header-container"
import OnCardsBlock from "../../main-container/onCardsBlock/onCardsBlock"
import { getMovieTitle } from "../../fetch/Fetch"
import Footer from "../../footer-container/footer-container/Footer"
import { getMovieId } from "../../fetch/Fetch"
class App extends React.Component {
	state = {
		listMoviesFromApi: [],
		listMoviesAllInformation: [],
		listUpdateMoviesAllInformation: [],
		listUpdateMoviesFromApi: [],
		ImbD: [],
		listErrors: [],
		listTrueResult: "",
		isSearchYourMovieText: "Search your movie",
		isSearchMovie: { display: "block" },
		search: "life",
		key: "b427943b",
		page_num: 1
	}


	onChangeCounter = (element) => {
		this.setState({ listMoviesFromApi: element })
		this.onReceiveRaiting()

	}

	onChangeMainList = (element) => {
		this.setState({ listMoviesFromApi: [...this.state.listMoviesFromApi, element].flat() })

	}

	onChangeGeneralRaiting = (element) => {
		this.setState({ listMoviesAllInformation: element })

	}


	onChangeUpdateNewGeneralRaiting = (element) => {
		this.setState({ listMoviesAllInformation: [...this.state.listMoviesAllInformation, element].flat() })

	}


	onUpdateRaiting = (data) => {

		const test = Array.from(new Set(data.map(item => item.Title)))
			.map(Title => {
				return data.find(item => item.Title === Title)
			})

		this.setState({ ImbD: test })


	}

	onlistErrors = (element) => {
		this.setState({ listErrors: element })
	}

	onlistTrueResult = (element) => {
		this.setState({ listTrueResult: element })
	}


	setSearch = (text) => {
		this.setState({ search: text })
	}


	onReceiveRaiting = () => {
		this.state.listMoviesFromApi.map((item) =>

			getMovieId(this.onChangeGeneralRaiting, item.imdbID, this.state.search, this.state.page_num, this.state.key)
		)
	}

	componentDidMount() {
		getMovieTitle(this.onChangeCounter, this.onlistErrors, this.onlistTrueResult, this.state.search, this.state.page_num, this.state.key);

	}

	handleinput = (e) => {
		this.setState({
			search: e.target.value
		})
		const val = e.target.value.replace(/[^\x00-\x7F]/ig, '');
		this.setState({ search: val });
	}

	clearInput = () => {
		this.setState({ search: "" })
	}



	onUpdateCounter = (element) => {
		this.setState({
			listUpdateMoviesFromApi: element

		})



	}

	render() {

		return (
			<div className="App">
				<HeaderContainer
					onChangeCounter={this.onChangeCounter}
					listErrors={this.state.listErrors}
					onlistErrors={this.onlistErrors}
					onlistTrueResult={this.onlistTrueResult}
					listTrueResult={this.state.listTrueResult}
					handleinput={this.handleinput}
					search={this.state.search}
					Key={this.state.key}
					listMoviesFromApi={this.state.listMoviesFromApi}
					setSearch={this.setSearch}
					page_num={this.state.page_num}
					clearInput={this.clearInput}
				/>
				<OnCardsBlock
					listMoviesFromApi={this.state.listMoviesFromApi}
					listMoviesAllInformation={this.state.listMoviesAllInformation}
					page_num={this.state.page_num}
					Key={this.state.key}
					setSearch={this.setSearch}
					onChangeCounter={this.onChangeCounter}
					onlistErrors={this.onlistErrors}
					onlistTrueResult={this.onlistTrueResult}
					search={this.state.search}
					onChangeCounterID={this.onChangeCounterID}
					listUpdateMoviesFromApi={this.state.listUpdateMoviesFromApi}
					onUpdateCounter={this.onUpdateCounter}
					onChangeMainList={this.onChangeMainList}
					onReceiveRaiting={this.onReceiveRaiting}
					onChangeMainRaiting={this.onChangeMainRaiting}
					onChangeUpdateNewGeneralRaiting={this.onChangeUpdateNewGeneralRaiting}
					listUpdateMoviesAllInformation={this.state.listUpdateMoviesAllInformation}
					onUpdateRaiting={this.onUpdateRaiting}
					imbD={this.state.ImbD}
				/>
				<Footer />
			</div>

		);
	}
}

export default App;
