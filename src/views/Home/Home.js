import './Home.scss';
import Grid from '../../components/Grid/Grid';
import PropTypes from 'prop-types';

const Home = ({ data, handleSubClick, handleFavClick, subscriptions }) => {
	let dataArr = []
  for (const property in data) {
    for (const nestedProp in data[property]) {
      dataArr.push((data[property][nestedProp]))
    }
  }

	return (
		<section className='home-container'>
			<Grid styleOverrideClass={'home'} data={ dataArr } handleSubClick={handleSubClick} handleFavClick={handleFavClick} subscriptions={subscriptions} />
		</section>
	)
}

export default Home;

Home.propTypes = {
  data: PropTypes.object,
  handleSubClick: PropTypes.func,
  handleFavClick: PropTypes.func,
  subscriptions: PropTypes.object
};