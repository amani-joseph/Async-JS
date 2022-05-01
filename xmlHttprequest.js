/** @format */

"use strict";

// const request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/name/kenya");
// request.send();
// request.addEventListener("load", function () {
// 	// console.log(this.response);
// 	const data = JSON.parse(this.response);
// 	console.log(data);
// 	return data;
// });

// PROMISES

// const promiseRequest = fetch("https://restcountries.com/v3.1/name/kenya");
// console.log(promiseRequest);

// const getCountry = (country) => {
// fetch(`https://restcountries.com/v3.1/name/${country}`)
// 	.then((response) => {
// 		console.log(response);
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});
// };

// getCountry("rwanda");

// CHAINING PROMISES

// const getCountry = (country) => {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data);
// 			const neighbour = data[0].borders[0];
// 			console.log(neighbour);
// 			if (!neighbour) return;
// 			// Fecth neighbour country data
// 			fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
// 				.then((response) => response.json())
// 				.then((neighbourdata) => console.log(neighbourdata));
// 		});
// };

// getCountry("rwanda");

// ERROR HANDLING
// const getCountry = (country) => {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`)
// 		.then(
// 			(response) => response.json(),
// 			(err) => alert(err)
// 		)
// 		.then((data) => {
// 			console.log(data);
// 			const neighbour = data[0].borders[0];
// 			console.log(neighbour);
// 			if (!neighbour) return;
// 			// Fecth neighbour country data
// 			fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
// 				.then(
// 					(response) => response.json(),
// 					(err) => alert(err)
// 				)
// 				.then((neighbourdata) => console.log(neighbourdata));
// 		});
// };

// getCountry("rwanda");

// better error handling
// const getCountry = (country) => {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`)
// 		.then(
// 			(response) => response.json(),
// 		)
// 		.then((data) => {
// 			console.log(data);
// 			const neighbour = data[0].borders[0];
// 			console.log(neighbour);
// 			if (!neighbour) return;
// 			// Fecth neighbour country data
// 			fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
// 				.then(
// 					(response) => response.json(),
// 				)
// 				.then((neighbourdata) => console.log(neighbourdata)).catch( err => alert(err))
// 		});
// };

// getCountry("rwanda");

// MANNUALLY THROWING ERRORS
const getCountry = (country) => {
	fetch(`https://restcountries.com/v3.1/name/${country}`)
		.then((response) => {
			// console.log(response);
			if (!response.ok)
				throw new Error(`Country does not exist. (${response.status})`);
			return response.json();
		})
		.then((data) => {
			console.log(data);
			const neighbour = data[0].borders[0];
			console.log(neighbour);
			if (!neighbour) return;
			// Fecth neighbour country data
			fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
				.then((response) => response.json())
				.then((neighbourdata) => console.log(neighbourdata));
		})
		.catch((err) => {
			alert(err.message);
			console.error(err);
		});
};

getCountry("giberishcountry");
