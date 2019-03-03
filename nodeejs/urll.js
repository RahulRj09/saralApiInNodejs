const readline = require('readline');
const id = require('./main')
var url = '';
exports.get_url = (id) =>{
	return new Promise((resolve, reject) =>{
		const rl = readline.createInterface({
			input: process.stdin 

		})
		rl.question('What do you think of Node.js? ', (answer) => {
			answer = answer - 1
			var value = id[answer]
			url = "http://saral.navgurukul.org/api/courses/"+value+"/exercises"
			rl.close();
			slug_url.push(url)
			return resolve(url)
		})
	})
}

module.exports.url = slug_url

