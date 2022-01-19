import './Grid.scss';
import Card from '../Card/Card';

const Grid = ({ data, handleSubClick, handleFavClick, styleOverrideClass, subscriptions }) => {

  console.log(data)

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