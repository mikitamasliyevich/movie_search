export const getMovieTitle = async (onChangeCounter, onlistErrors, onlistTrueResult, text = "", page = 1, key) => {
	const url = `https://www.omdbapi.com/?s=${text}&page=${page}&apikey=${key}`;
	const res = await fetch(url);
	const data = await res.json();
	if (data.Response === 'False') {
		return onlistErrors(data.Error),
			onlistTrueResult(data.Response)
	} else {
		return onChangeCounter(data.Search),
			onlistTrueResult(data.Response)
	};
};

const array = []

export const getMovieId = async (onChangeGeneralRaiting, id, text = "", page = 1, key) => {

	const url = `https://www.omdbapi.com/?i=${id}&text=${text}&page=${page}&apikey=${key}`;
	const res = await fetch(url);
	const respond = await res.json();
	if (respond.Response === 'False') {
		return console.log("error");
	} else {
		array.push(respond)
		onChangeGeneralRaiting(array)

	};

}
