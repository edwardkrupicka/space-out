const fetchData = async ( api, setStateParam ) => {
	try {
		const res = await fetch( api )
		const resJson = await res.json()
		setStateParam( resJson )
	} 
	catch( err ) {
		console.log( err )
	}
}

export { fetchData }