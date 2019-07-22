let Cookie = {}


;(function(){
	console.log(1)
	function setCookie({
		key,
		value,
		day,
		path = '/'
	}) {
		console.log(key, value)
		if (day) {
			let d = new Date()
			d.setDate(d.getDate() + day)
			document.cookie = `${key}=${value};expires=${d};path=${path}`
	
		} else {
			console.log(`${key}=${value}`)
			document.cookie = `${key}=${value};path=${path}`
	
		}
	}
	
	function removeCookie({
		key,
		path = '/'
	}) {
		console.log({
			key,
			path,
			day: -7
		})
		setCookie({
			key,
			path,
			day: -7
		})
	}
	// removeCookie({key:'age'})
	
	
	function getCookie({
		key
	}) {
		//abc=你好; age=18; name=aaa
		console.log(document.cookie)
		let arr = document.cookie.split('; ')
		for (let i = 0; i < arr.length; i++) {
			let tmpArr = arr[i].split('=')
			if (tmpArr[0] == key) {
				return tmpArr[1]
			}
		}
		return null
	}
	
	Cookie.setCookie = setCookie
	Cookie.getCookie = getCookie
	Cookie.removeCookie = removeCookie
	
	
})();


// Math.random()
// random()
console.log(Cookie)
Cookie.getCookie({key:'age'})


