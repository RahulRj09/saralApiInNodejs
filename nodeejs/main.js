const axios = require('axios');
const readline = require('readline');
const id = []
const slug = []
const url_new = require('./urll')
let promise1 = function () {
	return new Promise(function (res, rej) {
		res(axios.get('http://saral.navgurukul.org/api/courses'))
	})
}
promise1().then(function (res, rej) {
	let availableCourses = res.data.availableCourses
	for (var i = 0; i < availableCourses.length; i++) {
		console.log(i + 1 + " " + availableCourses[i]['name'])
		id.push(availableCourses[i]['id'])
	}
	console.log("Enter courses number")
	return promise2()
}).catch(error => {
	console.log(error);
});
let promise2 = function () {
	return new Promise(function (res, rej) {
		 var url = url_new.get_url(id)
			.then((url) => {
				// console.log(url)
				axios.get(url)
					.then((success) => {
						res(success)
					})
					.catch((err) => {
						console.log(err, "err")
						res(err)
					})
			})
			.catch((error) => {
				console.log(err, "err")
				res(err)
			})
	})
}
promise2().then(function (res, rej, url) {
	let value = res.data.data
	for(let i = 0; i < value.length ; i++){
		console.log(`${i+1} ${value[i]['name']}`)
		slug.push(value[i]['slug'])
		if(value[i]['childExercises'] != ''){
			let childExercises = value[i]['childExercises']
			for(let i= 0 ; i < childExercises.length; i++){
				console.log(`       ${i+1} ${childExercises[i]['name']}`)
			}
			
		}
	}
}).catch((err)=>{
 	console.log(err)
})
