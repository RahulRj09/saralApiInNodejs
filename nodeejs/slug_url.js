const readline = require('readline');
const slug = require('./main')
var slug_url = '';
const url_new = require('./urll')
console.log(url_new.url)
exports.get_slug_url = (slug) =>{
	return new Promise((resolve, reject) =>{
		const rl = readline.createInterface({
			input: process.stdin,
			terminal: false
		})
		rl.question('What do you think of Node.js? ', (answer) => {
			answer = answer - 1
			let slug = slug[answer]
			console.log(slug,"ye to nahi hai")
			slug_url = "http://saral.navgurukul.org/api/courses/"+value+"/exercises/getBySlug?slug="+slug
			console.log(slug_url,"rahul aaaya hai") 
			rl.close();
			process.stdin.destroy()
			return resolve(url)
		})
	})
}

