import './Grid.scss';
import Card from '../Card/Card';

const Grid = ({ data, styleOverrideClass}) => {

  const cards = data.articles.map((element) => {
      return <Card
        key={element.id}
        element={element}
      />
    })

	console.log(data.articles)

  return (
    <section className={!styleOverrideClass ? 'grid' : `grid ${styleOverrideClass}`}>
      {cards}
    </section>
  )
}

export default Grid;