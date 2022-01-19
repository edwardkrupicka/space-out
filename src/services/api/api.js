const fetchData = async ( api ) => {
	try {
		const res = await fetch( api )
		const json = await res.json()
		if(json.error){
      throw(json)
    }
		return(json)
	} 
	catch( err ) {
		console.log(err)
	}
}

const reduceToObj = (data, type) => {
	return data.reduce((obj, element) => {
		if(!obj[parseInt(element.id)]) {
			element['type'] = type
			element['favorited'] = false
			element['subscribed'] = false
			obj[parseInt(element.id)] = element
		}
		return obj
	}, {})
}

const fetchAllData = async (setData, setLoading, setError) => {
	try{
		let articles = await fetchData( 'https://api.spaceflightnewsapi.net/v3/articles' )
		let blogs = await fetchData( 'https://api.spaceflightnewsapi.net/v3/blogs')
		let reports = await fetchData( 'https://api.spaceflightnewsapi.net/v3/reports')
		if(articles.error){
      throw(articles)
    }
		reduceToObj(articles)
		setData({  articles: reduceToObj(articles, 'articles'), blogs: reduceToObj(blogs, 'blogs'), reports: reduceToObj(reports, 'reports') })
		setLoading(false)
	}
	catch(error){
		console.log(error.message)
		setError(error => [...error, `${error.message}`])
	}
}

export { fetchAllData }