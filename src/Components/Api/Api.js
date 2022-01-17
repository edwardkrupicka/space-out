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

const fetchAllData = async (setData, setLoading) => {
	let articles = await fetchData( 'https://api.spaceflightnewsapi.net/v3/articles')
	let blogs = await fetchData( 'https://api.spaceflightnewsapi.net/v3/blogs')
	let reports = await fetchData( 'https://api.spaceflightnewsapi.net/v3/reports')
	await setData({  articles: articles, blogs: blogs, reports: reports  })
	setLoading(false)
}

export { fetchAllData }