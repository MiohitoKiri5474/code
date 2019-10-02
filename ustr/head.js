const endpoint = 'https://www.jsonstore.io/e5385327c3e5981e2ad578322c832d2ccfb6814b365bf65f43b607d54f6d5732'
const ebox = document.getElementById('erbox')
const fetchJSON = (a) => {
	const f = new XMLHttpRequest()
	f.open('GET', a, false)
	f.onreadystatechange = oEvent => {
		if (f.readyState === 4) {
			if (f.status === 200) {} else {
				ebox.style.display = 'block'
				ebox.innerHTML = 'network seems to be offline'
			}
		}
	}
	f.onerror = () => {
		ebox.style.display = 'block'
		ebox.innerHTML = 'network error'
	}
	f.send()
	return f.responseText
}
const isURL = (a) => {
	const f = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
	if (f.test(a)) {
		return true
	} else {
		return false
	}
}
const hashh = window.location.hash.substr(1)
if (window.location.hash != '') {
	const res = JSON.parse(fetchJSON(`${endpoint}/${hashh}`))
	const data = res.result
	if (data != null) {
		if (isURL(data)) {
			window.location.href = data
		}
	}
}
