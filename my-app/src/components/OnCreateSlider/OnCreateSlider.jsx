import React from "react";
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import "../styles/onCreateSlider.scss"
import PageNotFoundImage from "../../images/404-not-found.jpg"
import { getMovieTitle } from "../../fetch/Fetch"
import { getMovieId } from "../../fetch/Fetch"
let pageNum = 2
let updateNum = 2
class OnCreateSlider extends React.Component {

	componentDidUpdate = (prevProps) => {

		if (prevProps.pagintionCards !== this.props.pagintionCards) {

			getMovieTitle(this.props.onUpdateCounter, this.props.onlistErrors, this.props.onlistTrueResult, this.props.search, pageNum += 1, this.props.Key)
			this.props.onChangeMainList(this.props.listUpdateMoviesFromApi)
			this.props.listMoviesFromApi.map((item) =>
				getMovieId(this.props.onChangeUpdateNewGeneralRaiting, item.imdbID, this.props.search, updateNum += 1, this.props.Key)
			)
			this.props.onUpdateRaiting(this.props.listMoviesAllInformation)

		}

	}


	render() {
		SwiperCore.use([Navigation, A11y])

		return (
			<Swiper

				navigation
				breakpoints={{

					320: {
						slidesPerView: 1,
						spaceBetween: 20
					},

					480: {
						slidesPerView: 2,
						spaceBetween: 40
					},

					640: {
						slidesPerView: 2,
						spaceBetween: 60
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 50
					}
				}}


				onReachEnd={() => this.props.onPagination()}
			>
				{this.props.listMoviesFromApi.map((item, index) => (

					<SwiperSlide key={index}>
						<div className="result">
							<a
								href={`https://www.imdb.com/title/${item.imdbID}/videogallery/`}
								className="card-title" target="_blank" rel="noreferrer">{item.Title}
							</a>
							<img
								className="card-image"
								src={item.Poster === "N/A" ? PageNotFoundImage : item.Poster}
								alt="cardImage" />
							<p
								className="card-year"
							>{item.Year}
							</p>

							{this.props.imbD.map((element, index) => (
								<div key={index} className="card-rating">{item.Title === element.Title ? element.imdbRating : null}</div>

							))}
						</div>

					</SwiperSlide>

				))}

			</Swiper>

		)
	}
}

export default OnCreateSlider




