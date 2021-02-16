import React from "react";
import "../styles/main.scss";
import OnCreateSlider from "../../components/OnCreateSlider/OnCreateSlider"



class OnCardsBlock extends React.Component {
	state = {
		pagintionCards: false,
	}

	onPagination = () => {
		this.setState({ pagintionCards: this.state.pagintionCards ? false : true })
	}

	render() {

		return (
			<div className="main-container">
				<OnCreateSlider
					listMoviesFromApi={this.props.listMoviesFromApi}
					page_num={this.props.page_num}
					Key={this.props.Key}
					setSearch={this.props.setSearch}
					onChangeCounter={this.props.onChangeCounter}
					onlistErrors={this.props.onlistErrors}
					onlistTrueResult={this.props.onlistTrueResult}
					search={this.props.search}
					pagintionCards={this.state.pagintionCards}
					onPagination={this.onPagination}
					listUpdateMoviesFromApi={this.props.listUpdateMoviesFromApi}
					onUpdateCounter={this.props.onUpdateCounter}
					listMoviesAllInformation={this.props.listMoviesAllInformation}
					onChangeMainList={this.props.onChangeMainList}
					onReceiveRaiting={this.props.onReceiveRaiting}
					onChangeMainRaiting={this.props.onChangeMainRaiting}
					onChangeUpdateNewGeneralRaiting={this.props.onChangeUpdateNewGeneralRaiting}
					listUpdateMoviesAllInformation={this.props.listUpdateMoviesAllInformation}
					onUpdateRaiting={this.props.onUpdateRaiting}
					imbD={this.props.imbD}
				/>
			</div>
		)
	}
}



export default OnCardsBlock
