import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.review}
      // country={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
    </div>
  );
}

export default App;
