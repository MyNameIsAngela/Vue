const STORAGE_KEY = 'todos-vuejs'
export default {
	// 相当于 fetch: function() 下面的为ES6语法
	fetch () {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save (items) {
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	}
}