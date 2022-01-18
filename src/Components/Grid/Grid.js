import './Grid.scss';
import Card from '../Card/Card';

const Grid = ({ data, setData, favorites, setFavorites, styleOverrideClass}) => {
  let articleArr = []
  for (const property in data.articles) {
    articleArr.push(data.articles[property])
  }
  
  let cards = articleArr.map(element => {
    return <Card
      data={data}
      favorites={favorites}
      key={element.id}
      element={element}
      setData={setData}
      setFavorites={setFavorites}
      styleOverrideClass={styleOverrideClass}
    />
  })

  return (
    <section className={`grid ${styleOverrideClass}`}>
      {cards}
    </section>
  )
}

export default Grid;