import './Grid.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Grid = ({ data, handleSubClick, handleFavClick, styleOverrideClass, subscriptions }) => {

  let cards = data.map(element => {
    return <Card
      handleFavClick={handleFavClick}
      handleSubClick={handleSubClick}
      data={data}
      key={element.id}
      element={element}
      styleOverrideClass={styleOverrideClass}
      subscriptions={subscriptions}
    />
  })

  return (
    <section className={`grid ${styleOverrideClass}`}>
      {cards}
    </section>
  )
}

export default Grid;

Grid.propTypes = {
  data: PropTypes.array,
  styleOverrideClass: PropTypes.string,
  handleSubClick: PropTypes.func,
  handleFavClick: PropTypes.func,
  subscriptions: PropTypes.object
};