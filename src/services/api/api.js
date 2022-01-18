const fetchData = async ( api ) => {
	try {
		const res = await fetch( api )
		const resJson = await res.json()
		return resJson
	} 
	catch( err ) {
		console.log( err )
	}
}

const reduceToObj = (data, type) => {
	return data.reduce((obj, element) => {
		if(!obj[parseInt(element.id)]) {
			element['type'] = type
			element['favorited'] = false
			obj[parseInt(element.id)] = element
		}
		return obj
	}, {})
}

const fetchAllData = async (setData, setLoading) => {
	let articles = await fetchData( 'https://api.spaceflightnewsapi.net/v3/articles')
	let blogs = await fetchData( 'https://api.spaceflightnewsapi.net/v3/blogs')
	let reports = await fetchData( 'https://api.spaceflightnewsapi.net/v3/reports')

	reduceToObj(articles)

	await setData({  articles: reduceToObj(articles, 'articles'), blogs: reduceToObj(blogs, 'blogs'), reports: reduceToObj(reports, 'reports')  })
	setLoading(false)
}

export { fetchAllData }