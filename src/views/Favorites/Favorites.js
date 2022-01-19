import './Favorites.scss';
import Grid from '../../components/Grid/Grid';

const Favorites = ({ favorites, handleSubClick, handleFavClick, subscriptions }) => {

	let dataArr = []
  for (const property in favorites) {
    console.log(favorites)
    for (const nestedProp in favorites[property]) {
      dataArr.push((favorites[property][nestedProp]))
    }
  }

	return (
		<section className='favorites-container'>
			<h1 className='favorites-header' >Favorites</h1>
			<Grid styleOverrideClass={'favorites'} data={dataArr} handleFavClick={handleFavClick} handleSubClick={handleSubClick} subscriptions={subscriptions} />
		</section>
	)
}

export default Favorites;